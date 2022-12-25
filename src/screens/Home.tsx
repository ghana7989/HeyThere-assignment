import BottomSheet from '@gorhom/bottom-sheet';
import Geolocation from '@react-native-community/geolocation';
import MapboxGL from '@rnmapbox/maps';
import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Marker from 'src/assets/logo/map-pin.svg';
import ChatNowCard from 'src/components/ChatNowCard';
import CustomMarker from 'src/components/CustomMarker';
import {getUsersIn1KMRadius} from 'src/mock/users';
import {colors} from 'src/theme';
import {NearByUser} from 'src/types/screen';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ2hhbmE3OTg5IiwiYSI6ImNrbmswNHZ6bzA2ZWwybnAzdjd4dzF2em0ifQ.Mr_QNWIcsw3YsAUUdVtHfg',
);
MapboxGL.requestAndroidLocationPermissions();

interface HomeProps {}
const Home: FC<HomeProps> = () => {
  const [location, setLocation] = useState({
    latitude: 0,
    longitude: 0,
  });

  const [selectedUser, setSelectedUser] = useState<null | NearByUser>(null);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks

  const handleCustomMarkerClick = useCallback((user: NearByUser) => {
    bottomSheetRef.current?.expand();
    setSelectedUser(user);
  }, []);

  // side-effects
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
    });
  }, []);

  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView
          scaleBarEnabled={false}
          style={styles.map}
          logoEnabled={false}>
          <MapboxGL.Camera
            animationMode="linearTo"
            zoomLevel={16}
            animationDuration={500}
            centerCoordinate={[
              selectedUser?.location.longitude || location.longitude,
              selectedUser?.location.latitude || location.latitude,
            ]}
          />

          <MapboxGL.MarkerView
            coordinate={[location.longitude, location.latitude]}
            anchor={{x: 0.5, y: 0.5}}>
            <Marker width={60} height={60} title="you are here" />
          </MapboxGL.MarkerView>

          {getUsersIn1KMRadius(location.latitude, location.longitude).map(
            (currUser, _) => {
              return (
                <MapboxGL.MarkerView
                  key={currUser.id}
                  coordinate={[
                    currUser.location.longitude,
                    currUser.location.latitude,
                  ]}
                  anchor={{x: 0.5, y: 0.5}}>
                  <CustomMarker
                    {...currUser}
                    onClick={handleCustomMarkerClick}
                  />
                </MapboxGL.MarkerView>
              );
            },
          )}
        </MapboxGL.MapView>
      </View>
      {!!selectedUser && (
        <BottomSheet
          handleStyle={{backgroundColor: colors.pink[100]}}
          enablePanDownToClose
          ref={bottomSheetRef}
          enableOverDrag={false}
          index={1}
          animateOnMount
          snapPoints={[150, 150]}>
          <View style={styles.contentContainer}>
            <ChatNowCard user={selectedUser} />
          </View>
        </BottomSheet>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'tomato',
  },
  map: {
    flex: 1,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.pink[100],
  },
});
export default Home;

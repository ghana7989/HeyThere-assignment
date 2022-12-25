import React, {FC, useCallback, useEffect, useRef, useState} from 'react';
// @ts-ignore
import ConnectivityManager from 'react-native-connectivity-status';

import {Alert, PermissionsAndroid, View} from 'react-native';
import Marker from 'src/assets/logo/map-pin.svg';
import ChatNowCard from 'src/components/ChatNowCard';
import CustomMarker from 'src/components/CustomMarker';
import {getUsersIn1KMRadius} from 'src/mock/users';
import {colors} from 'src/theme';
import {HomeScreenProps} from 'src/types/navigation';
import {Location, NearByUser} from 'src/types/screen';

import BottomSheet from '@gorhom/bottom-sheet';
import Geolocation from '@react-native-community/geolocation';
import RNRestart from 'react-native-restart';
import Instructions from './components/Instructions';
import SomethingWentWrong from './components/SomethingWentWrong';
import {styles} from './styles.Home';

import MapboxGL from '@rnmapbox/maps';

const Home: FC<HomeScreenProps> = props => {
  const [location, setLocation] = useState<null | Location>(null);
  const [locationPermissionGranted, setLocationPermissionGranted] =
    useState(false);
  const [areLocationServicesAvailable, setAreLocationServicesAvailable] =
    useState(false);
  const [selectedUser, setSelectedUser] = useState<null | NearByUser>(null);

  // ref
  const bottomSheetRef = useRef<BottomSheet>(null);

  // callbacks
  const handleCustomMarkerClick = useCallback((user: NearByUser) => {
    bottomSheetRef.current?.expand();
    setSelectedUser(user);
  }, []);
  const requestLocationPermission = async () => {
    try {
      const granted = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      );
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        setLocationPermissionGranted(true);
        const locationServicesAvailable =
          await ConnectivityManager.areLocationServicesEnabled();
        setAreLocationServicesAvailable(locationServicesAvailable);
      } else {
        console.log('location permission denied');
        Alert.alert('Location permission denied');
      }
    } catch (err) {
      console.warn(err);
    }
  };

  const onChatNowClick = useCallback(
    (user: NearByUser) => {
      props.navigation.navigate('PersonalChat', {
        id: user.id,
        name: user.name,
        image: user.image,
      });
    },
    [props.navigation],
  );

  const reloadApp = () => {
    RNRestart.Restart();
  };

  // side-effects
  useEffect(() => {
    Geolocation.getCurrentPosition(info => {
      setLocation({
        latitude: info.coords.latitude,
        longitude: info.coords.longitude,
      });
    });
  }, [locationPermissionGranted]);

  useEffect(() => {
    requestLocationPermission();
  }, []);

  if (!locationPermissionGranted || !areLocationServicesAvailable) {
    return (
      <Instructions requestLocationPermission={requestLocationPermission} />
    );
  }

  if (!location) {
    return <SomethingWentWrong reloadApp={reloadApp} />;
  }
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
            <ChatNowCard user={selectedUser} onChatNowClick={onChatNowClick} />
          </View>
        </BottomSheet>
      )}
    </View>
  );
};

export default Home;

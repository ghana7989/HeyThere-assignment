import React, {FC} from 'react';
import {Image, Pressable, StyleSheet, View} from 'react-native';
import {colors} from 'src/theme';
import {NearByUser} from 'src/types/screen';

interface CustomMarkerProps {
  name: string;
  id: string;
  location: {
    latitude: number;
    longitude: number;
  };
  image: string;
  onClick: ({name, id, location}: NearByUser) => void;
}
const CustomMarker: FC<CustomMarkerProps> = props => {
  return (
    <Pressable
      onPress={() =>
        props.onClick({
          id: props.id,
          name: props.name,
          location: props.location,
          image: props.image,
        })
      }>
      <View style={styles.container}>
        <Image
          source={{
            uri: props.image,
          }}
          style={styles.image}
        />
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    backgroundColor: colors.pink[200],
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'white',
    borderWidth: 2,
  },
  image: {width: 40, height: 40, borderRadius: 50},
});
export default CustomMarker;

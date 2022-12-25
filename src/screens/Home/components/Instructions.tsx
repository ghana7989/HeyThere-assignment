import React, {FC} from 'react';
import {styles} from '../styles.Home';
import {View} from 'react-native';
import Text from 'src/components/atomic/Text';
import SizedBox from 'src/components/atomic/SizedBox';
import Button from 'src/components/atomic/Button';

interface InstructionsProps {
  requestLocationPermission: () => Promise<void>;
}
const Instructions: FC<InstructionsProps> = props => {
  return (
    <View style={[styles.page]}>
      <Text type="BOLD" style={styles.instructions}>
        Please make sure the following
      </Text>
      <Text type="MEDIUM" style={styles.instructions}>
        1. Location Permission is given to app
      </Text>
      <Text type="MEDIUM" style={styles.instructions}>
        2. Location services are on
      </Text>
      <SizedBox height={20} />
      <Button onPress={props.requestLocationPermission}>
        <Text type="BOLD">Reload App</Text>
      </Button>
    </View>
  );
};

export default Instructions;

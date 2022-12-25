import React, {FC} from 'react';
import {View} from 'react-native';
import Button from 'src/components/atomic/Button';
import Text from 'src/components/atomic/Text';
import {styles} from '../styles.Home';

interface SomethingWentWrongProps {
  reloadApp: () => void;
}
const SomethingWentWrong: FC<SomethingWentWrongProps> = ({reloadApp}) => {
  return (
    <View style={styles.page}>
      <Text type="MEDIUM">Something went wrong</Text>
      <Button onPress={reloadApp}>
        <Text type="BOLD">Reload App</Text>
      </Button>
    </View>
  );
};

export default SomethingWentWrong;

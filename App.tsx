import React from 'react';
import {LogBox, Text, View} from 'react-native';
import {RootStackParamList} from 'src/types/navigation';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator<RootStackParamList>();

LogBox.ignoreLogs(['node_modules']); //Hide warnings

LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end
const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator>
        <RootStack.Screen name="Home" component={HomeScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};
function HomeScreen() {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

export default App;

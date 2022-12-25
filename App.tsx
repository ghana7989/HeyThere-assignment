import React from 'react';
import {LogBox} from 'react-native';
import {RootStackParamList} from 'src/types/navigation';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from 'src/screens/Home';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

const RootStack = createNativeStackNavigator<RootStackParamList>();

LogBox.ignoreLogs(['node_modules']); //Hide warnings

LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end
const App = () => {
  return (
    <GestureHandlerRootView style={{flex: 1}}>
      <NavigationContainer>
        <RootStack.Navigator>
          <RootStack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

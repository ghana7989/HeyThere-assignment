import React from 'react';
import {LogBox} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import Home from 'src/screens/Home/Home';
import PersonalChat from 'src/screens/PersonalChat';
import {RootStackParamList} from 'src/types/navigation';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken(
  'pk.eyJ1IjoiZ2hhbmE3OTg5IiwiYSI6ImNrbmswNHZ6bzA2ZWwybnAzdjd4dzF2em0ifQ.Mr_QNWIcsw3YsAUUdVtHfg',
);

LogBox.ignoreLogs(['node_modules']); //Hide warnings

LogBox.ignoreAllLogs(); //Hide all warning notifications on front-end

const RootStack = createNativeStackNavigator<RootStackParamList>();

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
          <RootStack.Screen
            name="PersonalChat"
            component={PersonalChat}
            options={{headerShown: false}}
          />
        </RootStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
};

export default App;

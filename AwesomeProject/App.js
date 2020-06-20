/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './src/pages/Home'
import Profile from './src/pages/Profile';
import Landing from './src/pages/Landing';
const Stack = createStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="Landing" 
          component={Landing} />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{title: 'Ini Home'}}
        />
        <Stack.Screen 
          name="Profile" 
          component={Profile} 
          options={{title: 'Ini Profile'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import User from'./User';
import Volunteer from'./Volunteer';
import Ngo from'./Ngo';
import SplashScreen from 'react-native-splash-screen';

import Select_screen from './Select_screen';
import Userlogin from './Userlogin';
import Profile from './Profile';
import Userscreen from './Userscreen';





SplashScreen.hide();




const Stack = createStackNavigator();


function Open() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="Select_screen"  component={Select_screen} />

        <Stack.Screen name="Userlogin"  component={Userlogin} />

        <Stack.Screen name="User" component={User} />

        <Stack.Screen name="Volunteer" component={Volunteer} />

        <Stack.Screen name="Ngo" component={Ngo} />
        <Stack.Screen name="Userscreen" component={Userscreen} />

        <Stack.Screen name="Profile" component={Profile} />

        </Stack.Navigator>
     </NavigationContainer>
  );
}



export default Open;	
// In App.js in a new project

import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import User from'./src/screens/User';
import Volunteer from'./src/screens/Volunteer';
import Ngo from'./src/screens/Ngo';
import SplashScreen from 'react-native-splash-screen';
// import Select from './src/screens/component/Select';
import Select_screen from './src/screens/Select_screen';
import Userlogin from './src/screens/Userlogin';
import Profile from './src/screens/Profile';
import Userscreen from './src/screens/Userscreen';
import Emergency from './src/screens/Emergency';
import Admin from './src/screens/Admin';

import Faq from './src/screens/Faq';
import Faq1 from './src/screens/Faq1';



import App2 from './App2';
import App1 from './App1';






SplashScreen.hide();




const Stack = createStackNavigator();


function App() {

  
  return (
    <NavigationContainer>
      <Stack.Navigator 
      screenOptions={{ headerShown: false }}
      >

        <Stack.Screen name="Select_screen"  component={Select_screen} />

        <Stack.Screen name="Userlogin"  component={Userlogin} />
        <Stack.Screen name="App1"  component={App1} />


        <Stack.Screen name="Emergency"  component={Emergency} />
        <Stack.Screen name="Faq"  component={Faq} />
        <Stack.Screen name="Faq1"  component={Faq1} />
       
        <Stack.Screen name="Admin"  component={Admin} />





        <Stack.Screen name="User" component={User} />

        <Stack.Screen name="Volunteer" component={Volunteer} />

        <Stack.Screen name="Ngo" component={Ngo} />
        <Stack.Screen name="Userscreen" component={Userscreen} />

        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="App2" component={App2} />

        


        </Stack.Navigator>
     </NavigationContainer>
  );
}



export default App;	
import React, {Component} from 'react';
import {View, Button, Image, Style, ImageBackground} from 'react-native';
import {Content, Card, CardItem, Body, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Select_screen(props) {
  return (
    <View>
      <ImageBackground
        source={require('../img/bg.jpg')}
        style={{height: '100%'}}>
        <View style={{paddingTop: 150, margin: 20}}>
          <Text></Text>
          <Button
            title="User"
            onPress={() => props.navigation.navigate('User')}
          />
          {/* <Text></Text>

<Button
            title="Userlogin"
            onPress={() => props.navigation.navigate('Userlogin')}
          /> */}
          <Text></Text>
          <Button
            title="Ngo"
            onPress={() => props.navigation.navigate('Ngo')}
          />

          <Text></Text>
          <Button
            title="Volunteer"
            onPress={() => props.navigation.navigate('Volunteer')}
          />

          <Text></Text>

          {/* <Button  title="Profile" onPress={() => props.navigation.navigate('Profile')}  />
<Text></Text>


<Button  title="Userscreen" onPress={() => props.navigation.navigate('Userscreen')}  />
<Text></Text> */}
        </View>
      </ImageBackground>
      <Text></Text>
    </View>
  );
}
export default Select_screen;
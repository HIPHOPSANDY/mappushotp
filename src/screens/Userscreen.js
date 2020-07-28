import React, {Component} from 'react';
import {View, Button, Image, Style, ImageBackground} from 'react-native';
import {Content, Card, CardItem, Body, Text} from 'native-base';
import {TouchableOpacity} from 'react-native-gesture-handler';

function Userscreen(props) {
  return (
    <View>
      <ImageBackground
        source={require('../img/bg.jpg')}
        style={{height: '100%'}}>
        <View style={{paddingTop: 150, margin: 20}}>
          <Text></Text>
          <Button
            title="Map"
            onPress={() => props.navigation.navigate('App1')}
          />

          <Text></Text>
          <Button
            title="Emergency Alert"
            onPress={() => props.navigation.navigate('Emergency')}
          />

          <Text></Text>
          <Button
            title="Profile"
            onPress={() => props.navigation.navigate('Profile')}
          />

          <Text></Text>
          <Button
            title="CYCLONE"
            onPress={() => props.navigation.navigate('Faq')}
          />

          <Text></Text>
          <Button
            title="FLOOD"
            onPress={() => props.navigation.navigate('Faq1')}
          />

          <Text></Text>
          <Button
            title="Admin"
            onPress={() => props.navigation.navigate('Admin')}
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
export default Userscreen;

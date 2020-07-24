import React, { Component } from 'react';
import { Alert, View ,Text} from "react-native";
import AsyncStorage from '@react-native-community/async-storage';
import firebase from "react-native-firebase";
import MapView, { Marker } from "react-native-maps";
import {
  StyleSheet
} from 'react-native';
const styles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,
    flex: 1,
    alignItems: 'center'
  },
  inputText: {
    height: 36,
      padding: 4,
      marginRight: 5,
      flex: 4,
      fontSize: 18,
      borderWidth: 1,
      borderColor: '#48BBEC',
      borderRadius: 8,
      color: '#48BBEC'
  }
});
class App extends Component {
  constructor() {
    super();
  }

  async componentDidMount() {
    //we check if user has granted permission to receive push notifications.
    this.checkPermission();
    // Register all listener for notification 
    this.createNotificationListeners();
  }

  async checkPermission() {
    const enabled = await firebase.messaging().hasPermission();
    // If Premission granted proceed towards token fetch
    if (enabled) {
      this.getToken();
      //console.log(this.getToken().then(console.log));
    } else {
      // If permission hasn’t been granted to our app, request user in requestPermission method. 
      this.requestPermission();
    }
  }

  async getToken() {
    let fcmToken = await AsyncStorage.getItem('fcmToken');
    console.log(fcmToken);
    if (!fcmToken) {
      fcmToken = await firebase.messaging().getToken();
      if (fcmToken) {
        // user has a device token
        await AsyncStorage.setItem('fcmToken', fcmToken);
      }
    }
  }

  async requestPermission() {
    try {
      await firebase.messaging().requestPermission();
      // User has authorised
      this.getToken();
    } catch (error) {
      // User has rejected permissions
      console.log('permission rejected');
    }
  }

  async createNotificationListeners() {

    // This listener triggered when notification has been received in foreground
    this.notificationListener = firebase.notifications().onNotification((notification) => {
      const { title, body } = notification;
      this.displayNotification(title, body);
    });

    // This listener triggered when app is in backgound and we click, tapped and opened notifiaction
    this.notificationOpenedListener = firebase.notifications().onNotificationOpened((notificationOpen) => {
      const { title, body } = notificationOpen.notification;
      this.displayNotification(title, body);
    });

    // This listener triggered when app is closed and we click,tapped and opened notification 
    const notificationOpen = await firebase.notifications().getInitialNotification();
    if (notificationOpen) {
      const { title, body } = notificationOpen.notification;
      this.displayNotification(title, body);
    }
  }


  displayNotification(title, body) {
    // we display notification in alert box with title and body
    Alert.alert(
      title, body,
      [
        { text: 'Ok', onPress: () => console.log('ok pressed') },
      ],
      { cancelable: false },
    );
  }

  render() {
    console.log("Mapview");
    return (
      
      <MapView
      style={ styles.map }
      mapType={"standard"}
      zoomEnabled={true}
      scrollEnabled={true}
      showsScale={true}
      initialRegion={{
        latitude: 13.067439,
        longitude: 80.237617,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
      }}
    >
    <Marker
      coordinate={{latitude: 13.067439,
        longitude: 80.237617}}
      title={"VisionU"}
      description={"Volunteer location"}
    />
    </MapView> 
      
    );
  }
}

export default App;
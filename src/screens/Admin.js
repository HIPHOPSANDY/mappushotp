import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class Admin extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://lit-brushlands-43502.herokuapp.com/Admin' }}  />;
  }
}
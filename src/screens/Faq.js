import * as React from 'react';
import { WebView } from 'react-native-webview';

export default class Faq extends React.Component {
  render() {
    return <WebView source={{ uri: 'https://shield2019.000webhostapp.com/html/cyclone/cyclone.html' }}  />;
  }
}
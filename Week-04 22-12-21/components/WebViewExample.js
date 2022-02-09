import React from 'react';
import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import {WebView} from 'react-native-webview';

const WebViewExample = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <WebView
        source={{uri: 'https://www.tni.ac.th'}}
        style={{marginTop: 20}}
      />
    </SafeAreaView>
  );
};

export default WebViewExample;

const styles = StyleSheet.create({});

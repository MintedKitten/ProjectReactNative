import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {styles02} from '../components/styles02';

const SettingScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 35,
        }}>
        <Text style={styles02.PageText}>Settings Screen</Text>
        <TouchableOpacity
          style={styles02.Button}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Home');
          }}>
          <Text>Go to Home Tab</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles02.Button}
          activeOpacity={0.8}
          onPress={() => {
            alert('Future Button');
          }}>
          <Text>Open News Screen</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles02.Button}
          activeOpacity={0.8}
          onPress={() => {
            navigation.navigate('Profile');
          }}>
          <Text>Go Profile Screen</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles02.TextBotton}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({});

import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React from 'react';
import {styles02} from '../components/styles02';

const ProfileScreen = ({navigation}) => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          padding: 35,
        }}>
        <Text style={styles02.PageText}>You are on Profile Screen</Text>
      </View>
      <Text style={styles02.TextBotton}>www.tni.ac.th</Text>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const AboutScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>About Me page</Text>
      <Button
        title="Go to About Page again"
        onPress={() => {
          navigation.push('About');
        }}
      />
      <Button
        title="Go to Home Page"
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
      <Button
        title="Go back"
        onPress={() => {
          navigation.goBack();
        }}
      />
      <Button
        title="Go back to first screen in the stack"
        onPress={() => {
          navigation.popToTop();
        }}
      />
    </View>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

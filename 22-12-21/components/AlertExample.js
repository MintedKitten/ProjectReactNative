import React from 'react';
import {
  Alert,
  Button,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const AlertExample = () => {
  const simpleAlertHandler = () => {
    alert('Hello i am simple alert from native javascript');
  };
  const TwoOptionAlertHandler = () => {
    Alert.alert(
      'Hello',
      'I am 2 option alert. Do you want to cancle me?',
      [
        {
          text: 'Yes',
          onPress: () => {
            console.log('Yes pressed');
          },
        },
        {
          text: 'No',
          onPress: () => {
            console.log('No pressed');
          },
        },
      ],
      {cancelable: true},
    );
  };
  const ThreeOptionAlertHandler = () => {
    Alert.alert(
      'Hello',
      'I am 3 option alert. Do you want to cancle me?',
      [
        {
          text: 'Maybe',
          onPress: () => {
            console.log('Maybe pressed');
          },
        },
        {
          text: 'Yes',
          onPress: () => {
            console.log('Yes pressed');
          },
        },
        {
          text: 'Ok',
          onPress: () => {
            console.log('No pressed');
          },
        },
      ],
      {cancelable: true},
    );
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Button title="Simple Alert" onPress={simpleAlertHandler} />
        <Button title="Alert With 2 Options" onPress={TwoOptionAlertHandler} />
        <Button
          title="Alert With 3 Options"
          onPress={ThreeOptionAlertHandler}
        />
      </View>
    </SafeAreaView>
  );
};

export default AlertExample;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
});

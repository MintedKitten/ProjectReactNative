import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

const TouchablePractice = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const checkInput = () => {
    if (!Email.trim()) {
      alert('Please Enter Email');
    } else if (!Password.trim()) {
      alert('Please Enter Password');
    } else {
      alert(`Email: ${Email}\nPassword: ${Password}`);
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInputStyle}
          placeholder="Enter Email"
          underlineColorAndroid="transparent"
          placeholderTextColor="#7A42F4"
          onChangeText={name => {
            setEmail(name);
          }}
        />
        <TextInput
          secureTextEntry={true}
          style={styles.textInputStyle}
          placeholder="Enter Password"
          underlineColorAndroid="transparent"
          placeholderTextColor="#7A42F4"
          onChangeText={email => {
            setPassword(email);
          }}
        />
        <TouchableOpacity
          style={styles.buttonSubmitStyle}
          activeOpacity={0.8}
          onPress={() => {
            checkInput();
          }}>
          <Text style={styles.buttonTextStyle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default TouchablePractice;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 35,
  },
  textInputStyle: {
    width: '100%',
    height: 40,
    paddingHorizontal: 5,
    borderWidth: 0.5,
    marginTop: 15,
    borderColor: '#7A42F4',
    color: '#7A42F4',
  },
  buttonSubmitStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#7A42F4',
    borderColor: '#fff',
    height: 40,
    marginTop: 10,
  },
  buttonTextStyle: {
    color: '#fff',
    marginBottom: 4,
    marginLeft: 10,
  },
});

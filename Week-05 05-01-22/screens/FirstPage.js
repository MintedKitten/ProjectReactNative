import React, {useState} from 'react';
import {StyleSheet, Text, TextInput, View, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const FirstPage = ({navigation}) => {
  const [name, setName] = useState('');
  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text style={styles.heading}>
          React Native Pass Value From One Screen To Another
        </Text>
        <Text style={styles.textStyle}>
          Please insert your name to pass to the second page
        </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your name"
          underlineColorAndroid="transparent"
          onChangeText={name => {
            setName(name);
          }}
        />
        <Button
          title="Go Next"
          onPress={() => navigation.navigate('SecondPage', {name: name})}
        />
      </View>
    </SafeAreaView>
  );
};

export default FirstPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    padding: 20,
  },
  heading: {
    fontSize: 25,
    textAlign: 'center',
    marginVertical: 10,
  },
  textStyle: {
    textAlign: 'center',
    fontSize: 16,
    marginVertical: 10,
  },
  inputStyle: {
    width: '80%',
    height: 44,
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#DBDBD6',
  },
});

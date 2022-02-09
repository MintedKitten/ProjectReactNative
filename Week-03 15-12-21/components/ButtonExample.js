import React from 'react';
import {View, Text, StyleSheet, SafeAreaView, Button} from 'react-native';

const ButtonExample = () => {
  const onPressAlert = () => {
    alert('Woah');
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Text>Button Example</Text>
        <Button
          title="Click Me"
          onPress={() => {
            onPressAlert();
          }}
          color="#841584"
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default ButtonExample;

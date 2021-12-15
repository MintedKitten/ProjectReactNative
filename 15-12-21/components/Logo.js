import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

const Logo = () => {
  const title = 'TNI';
  const isTitle = true;

  const showData = () => <Text>Hello December</Text>;
  //   const showData = () => {
  //     return  <Text>Hello December</Text>;
  //   };

  return (
    <View>
      <Text style={{color: 'blue', fontSize: 20}}>Thai-Nichi</Text>
      {isTitle === true && <Text>{title}</Text>}
      {
        isTitle ? ( //กำหนดเงื่อนไข
          <Text>{title}</Text> //เงื่่อนไขเป็นจริง
        ) : (
          <Text>Thai-Nichi</Text>
        ) //เงื่่อนไขเป็นเท็จ
      }
      {showData()}
    </View>
  );
};

export default Logo;

const styles = StyleSheet.create({});

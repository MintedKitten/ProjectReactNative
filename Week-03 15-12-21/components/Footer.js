import React, {useState, useEffect} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const Footer = () => {
  const users = [
    {id: 1, name: 'John '},
    {id: 2, name: 'Mary'},
  ];

  const [count, setCount] = useState(0);

  const [title, setTitle] = useState('Hello');

  // Run when this file is reload
  useEffect(() => {
    console.log('useEffect 1');
  });

  //Run once. becuase nothing within the dependency changed
  useEffect(() => {
    console.log('useEffect 2');
  }, []);

  //Run everytime the dependency has changed
  useEffect(() => {
    console.log('useEffect 3');
  }, [title]);

  return (
    <View>
      <Text style={styles.title}>
        Thai-Nichi Institute of Technology {count}
      </Text>
      {users.map((user, index) => {
        return (
          <Text key={user.id}>
            {index} {user.name}
          </Text>
        );
      })}
      <Button
        title="Click Me"
        onPress={() => {
          //   setCount(5);
          setCount(count + 1);
        }}
      />
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
  },
});

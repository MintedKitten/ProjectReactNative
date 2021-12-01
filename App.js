import React, {useState} from 'react';

// import {useState, useMemo, useCallback} from 'react';

// import all user component
// import {View, Text, StyleSheet, TextInput, Button} from 'react-native';
import {
  View,
  Text,
  Button,
  SafeAreaView,
  StyleSheet,
  RefreshControl,
  ScrollView,
  TextInput
} from 'react-native';

// const Greeting = ({name}) => {
//   // const {name} = props;
//   return (
//     <View style={{alignItems: 'center'}}>
//       <Text>Wow {name}</Text>
//     </View>
//   );
// };

// const LotsOfGreetings = () => {
//   return (
//     <View style={{alignItems: 'center', top: 50}}>
//       <Greeting name="Merry Chirstmas" />
//       <Greeting name="Heppy New year" />
//       <Greeting name="Hello!" />
//     </View>
//   );
// };

// const MyCustomTextWidth = ({fname, lname}) => {
//   return (
//     <View>
//       <Text style={{fontSize: 14}}>
//         Your First Name is {fname} and Last Name is {lname}
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   return (
//     <View style={{alignItems: 'center', flex: 1, justifyContent: 'center'}}>
//       <Text>
//         <MyCustomTextWidth fname="Thitiwat" lname="Teeramessiriyos" />
//         <MyCustomTextWidth fname="Patiparn" lname="Techawatcharapaikul" />
//       </Text>
//     </View>
//   );
// };

// const App = () => {
//   // userState
//   const [number, setNumber] = useState(0);
//   const [isRandom, setRandom] = useState(false);

//   const randomNumberWithoutMemo = Math.random();

//   const randomNumber = useMemo(() => {
//     return Math.random();
//   }, [isRandom]);

//   return (
//     <View style={styles.container}>
//       <View style={styles.countContainer}>
//         <Button
//           title="down"
//           onPress={() => {
//             setNumber(number - 1);
//           }}
//         />
//         <Text style={styles.countNumber}>{number}</Text>
//         <Button
//           title="up"
//           onPress={() => {
//             setNumber(number + 1);
//           }}
//         />
//       </View>
//       <Text>without useMemo: {randomNumberWithoutMemo}</Text>
//       <Text>useMemo: {randomNumber}</Text>
//       <Button
//         title="Random"
//         onPress={() => {
//           setRandom(!isRandom);
//         }}
//       />
//     </View>
//   );
// };

// const wait = timeout => {
//   return new Promise(resolve => setTimeout(resolve, timeout));
// };

// const App = () => {
//   const [refreshing, setRefreshing] = React.useState(false);

//   const onRefresh = React.useCallback(() => {
//     setRefreshing(true);
//     wait(2000).then(() => {
//       setRefreshing(false);
//     });
//   }, []);

//   return (
//     <SafeAreaView style={styles.container}>
//       <ScrollView
//         contentContainerStyle={styles.scrollView}
//         refreshControl={
//           <RefreshControl
//             refreshing={refreshing}
//             onRefresh={() => {
//               onRefresh();
//             }}
//           />
//         }>
//         <Text>Pull down to see RefreshControl Indicator</Text>
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

// const UselessTextInput = () => {
//   const [text, onChangeText] = useState('');

//   const [number, onChangeNumber] = useState(null);

//   return (
//     <SafeAreaView style={styles.container}>
//       <TextInput
//         style={styles.input}
//         onChangeText={text => {
//           onChangeText(text);
//         }}
//         placeholder="Useless Placeholder"
//         value={text}
//       />
//       <TextInput
//         style={styles.input}
//         onChangeText={number => {
//           onChangeNumber(number);
//         }}
//         keyboardType="numeric"
//         placeholder="Number plz"
//         value={number}
//       />
//       {/* <Text>{text}</Text> */}
//       <Text>{number}</Text>
//     </SafeAreaView>
//   );
// };

const App = () => {
  const [inputValue, setInputValue] = useState('');

  const checkValueIsNumeric = text => {
    if (isNaN(inputValue) && !inputValue) {
      alert('Not numeric');
    } else {
      alert('Correct');
    }
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <TextInput
          style={styles.textInput}
          placeholder="Enter Text"
          onChangeText={inputValue => {
            setInputValue(inputValue);
          }}
        />
        <Button
          color="#606070"
          title="Validate Value is Numeric"
          onPress={() => {
            checkValueIsNumeric();
          }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    marginTop: 60,
    // backgroundColor: '#ffffff',
    // padding: 10,
  },
  textInput: {
    textAlign: 'center',
    height: 50,
    width: '70%',
    marginBottom: 10,
    // borderWidth: 1,
    // borderColor: 'black',
  },
  // countContainer: {
  //   flexDirection: 'row',
  //   margin: 30,
  //   justifyContent: 'space-between',
  //   alignItems: 'center',
  // },
  // countNumber: {
  //   fontSize: 20,
  //   fontWeight: 'bold',
  //   color: 'red',
  // },
  // scrollView: {
  //   flex: 1,
  //   backgroundColor: 'pink',
  //   alignItems: 'center',
  //   justifyContent: 'center',
  // },
  // input: {
  //   height: 40,
  //   margin: 12,
  //   borderWidth: 1,
  //   padding: 10,
  // },
});

export default App;

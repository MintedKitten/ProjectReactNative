import {StyleSheet, Image} from 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from './screens/HomeScreen';
import SettingScreen from './screens/SettingScreen';
import ProfileScreen from './screens/ProfileScreen';
import {styles02} from './components/styles02';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function HomeScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: styles02.HeaderStyle,
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: styles02.HeaderTitleStyle,
      }}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{title: 'Home Page'}}
      />
    </Stack.Navigator>
  );
}

function SettingScreenStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        // Header Color
        headerStyle: styles02.HeaderStyle,
        // Header Text Color
        headerTintColor: '#fff',
        // Header Text Style
        headerTitleStyle: styles02.HeaderTitleStyle,
      }}>
      <Stack.Screen
        name="Settings"
        component={SettingScreen}
        options={{title: 'Setting Page'}}
      />
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{title: 'Profile Page'}}
      />
    </Stack.Navigator>
  );
}

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let srcimg;
            if (route.name === 'Home') {
              srcimg = focused
                ? require('./assets/logo1.png')
                : require('./assets/logo2.png');
            } else if (route.name === 'Settings') {
              srcimg = focused
                ? require('./assets/logo1.png')
                : require('./assets/logo3.png');
            }
            return <Image source={srcimg} style={styles02.ImgNavTabBottom} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: 'green',
          inactiveTintColor: 'black',
          style: styles02.NavTabBottom,
          labelStyle: styles02.TextNavTabBotton,
        }}>
        <Tab.Screen name="Home" component={HomeScreenStack} />
        <Tab.Screen name="Settings" component={SettingScreenStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;

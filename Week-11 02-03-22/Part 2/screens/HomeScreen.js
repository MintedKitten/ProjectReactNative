import React, {useContext} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import {userStoreContext} from '../context/UserContext';

const IoniconsHeaderButton = props => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const HomeScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Register"
            iconName="person-add"
            onPress={() => navigation.navigate('Register')}
          />
        </HeaderButtons>
      ),
      headerLeft: () => (
        <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
          <Item
            title="Menu"
            iconName="menu"
            onPress={() => navigation.openDrawer()}
          />
        </HeaderButtons>
      ),
    });
  }, [navigation]);

  const userStore = useContext(userStoreContext);

  return (
    <View style={styles.container}>
      <Ionicons name="home" size={50} color="skyblue" />
      <Text>Main page</Text>
      {userStore.profile != null ? (
        <>
          <Text>Welcome: {userStore.profile.name}</Text>
          <Text>{userStore.profile.email}</Text>
        </>
      ) : (
        <></>
      )}
      <Button
        title="Go to About Me"
        onPress={() =>
          navigation.navigate('About', {email: 'an.korndanai_st@tni.ac.th'})
        }
      />
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

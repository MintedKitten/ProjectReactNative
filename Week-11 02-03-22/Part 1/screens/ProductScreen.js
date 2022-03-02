import React, {useState, useEffect, useCallback} from 'react';
import {StyleSheet, View, ActivityIndicator, FlatList} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {
  HeaderButtons,
  HeaderButton,
  Item,
  HiddenItem,
  OverflowMenu,
} from 'react-navigation-header-buttons';
import axios from 'axios';
import {
  Container,
  Header,
  Content,
  List,
  ListItem,
  Thumbnail,
  Text,
  Left,
  Body,
  Right,
  Button,
  Badge,
} from 'native-base';
import {useFocusEffect} from '@react-navigation/native';

const IoniconsHeaderButton = props => (
  // the `props` here come from <Item ... />
  // you may access them and pass something else to `HeaderButton` if you like
  <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
);

const ProductScreen = ({navigation}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({
      // headerRight: () => (
      //   <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
      //     <Item
      //       title="Register"
      //       iconName="person-add"
      //       onPress={() => alert('Registering')}
      //     />
      //   </HeaderButtons>
      // ),
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

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  let cancelToken;

  //getData from server
  const getData = async () => {
    setLoading(true);
    const res = await axios.get('https://api.codingthailand.com/api/course', {
      cancelToken: cancelToken.token,
    });
    // alert(JSON.stringify(res.data.data[0].title));
    // console.log(cancelToken.token)
    setProduct(res.data.data);
    setLoading(false);
  };

  // Everytime product screen is entered or focused, pull data from server
  useFocusEffect(
    // useCallback optimize the calling of function, no re-rendering of child components
    useCallback(() => {
      cancelToken = axios.CancelToken.source();
      getData();
      console.log(cancelToken);
      return () => {
        cancelToken.cancel();
      };
    }, []),
  );

  //useEffect when A Product is selected reload data (once)
  // useEffect(() => {
  //   getData();

  //   return () => {
  //     second;
  //   };
  // }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#051367" />
      </View>
    );
  }

  const _onRefresh = () => {
    getData();
  };

  return (
    <View>
      <FlatList
        // set the data form server
        data={product}
        // Extract the key from the data with keyExtractor
        keyExtractor={(item, index) => {
          item.id.toString();
        }}
        // pull dow to refresh
        onRefresh={() => {
          _onRefresh();
        }}
        refreshing={loading} // If is still refreshing wait for it to done
        // render the data with renderItem
        renderItem={({item}) => (
          <ListItem
            thumbnail
            onPress={() => {
              navigation.navigate('Details', {id: item.id, title: item.title});
            }}>
            <Left>
              <View>
                <Thumbnail square source={{uri: item.picture}} />
              </View>
            </Left>
            <Body>
              <Text>{item.title}</Text>
              <Text note numberOfLines={1}>
                {item.detail}
              </Text>
            </Body>
            <Right>
              <View>
                <Badge danger>
                  <Text>{item.view}</Text>
                </Badge>
                {/* <Button transparent>
                  <Text>View</Text>
                </Button> */}
              </View>
            </Right>
          </ListItem>
        )}
      />
    </View>
  );
};

export default ProductScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

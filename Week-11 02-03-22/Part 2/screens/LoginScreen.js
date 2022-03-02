import {StyleSheet, View, SafeAreaView} from 'react-native';
import React, {useState, useEffect, useContext} from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Label,
  Button,
  Text,
  Icon,
} from 'native-base';
import axios from 'axios';
import {Formik, Field} from 'formik';
import * as Yup from 'yup';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {userStoreContext} from '../context/UserContext';

const validateSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is Required'),
});

const LoginScreen = ({navigation}) => {
  const userStore = useContext(userStoreContext);

  return (
    <Container>
      <Content padder>
        <Formik
          // the value name and startnig value
          initialValues={{
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          onSubmit={async (values, {setSubmitting}) => {
            // same shape as initial values
            // alert(JSON.stringify(values));
            try {
              const url = 'https://api.codingthailand.com/api/login';
              const res = await axios.post(url, {
                email: values.email,
                password: values.password,
              });
              //   alert(JSON.stringify(res.data));
              const jsonValue = JSON.stringify(res.data);
              await AsyncStorage.setItem('@token', jsonValue);
              // get profile
              const url_profile = 'https://api.codingthailand.com/api/profile';
              const res_profile = await axios.get(url_profile, {
                headers: {
                  Authorization: 'Bearer ' + res.data.access_token,
                },
              });
              //   alert(JSON.stringify(res_profile.data.data.user));
              const jsonValue_profile = JSON.stringify(
                res_profile.data.data.user,
              );
              await AsyncStorage.setItem('@profile', jsonValue_profile);

              // Get and Update Profile with Context
              const profile = await AsyncStorage.getItem('@profile');
              const jsonValue_get_profile = JSON.parse(profile);
              userStore.updateProfile(jsonValue_get_profile);
              alert('Login Successfully');
              navigation.navigate('Home');
            } catch (error) {
              alert(error.response.data.message);
            } finally {
              // allowing the button to be pressed again
              setSubmitting(false);
            }
          }}>
          {/*errors is for validating, touched is for when component is unclicked*/}
          {({
            errors,
            touched,
            values,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <Form>
              <Item
                stackedLabel
                last
                error={errors.email && touched.email ? true : false}>
                <Label>
                  Email{' '}
                  {errors.email && touched.email && (
                    <Icon name="close-circle-outline" />
                  )}
                </Label>
                <Input
                  value={values.email}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  keyboardType="email-address"
                />
              </Item>
              {errors.email && touched.email && (
                <Item>
                  <Label style={{color: 'red', fontSize: 10}}>
                    {errors.email}
                  </Label>
                </Item>
              )}
              <Item
                stackedLabel
                last
                error={errors.password && touched.password ? true : false}>
                <Label>
                  Password{' '}
                  {errors.password && touched.password && (
                    <Icon name="close-circle-outline" color="red" />
                  )}
                </Label>
                <Input
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  secureTextEntry={true}
                />
              </Item>
              {errors.password && touched.password && (
                <Item>
                  <Label style={{color: 'red', fontSize: 10}}>
                    {errors.password}
                  </Label>
                </Item>
              )}
              <Button
                block
                large
                style={{marginTop: 30, backgroundColor: 'azure'}}
                onPress={() => {
                  handleSubmit();
                }}
                // If submitted, disable button
                disabled={isSubmitting}>
                <Text
                  style={{color: 'dimgrey', fontSize: 20, fontWeight: 'bold'}}>
                  Login
                </Text>
              </Button>
            </Form>
            // <Form>
            //   <Field name="firstName" />
            //   {errors.firstName && touched.firstName ? (
            //     <div>{errors.firstName}</div>
            //   ) : null}
            //   <Field name="lastName" />
            //   {errors.lastName && touched.lastName ? (
            //     <div>{errors.lastName}</div>
            //   ) : null}
            //   <Field name="email" type="email" />
            //   {errors.email && touched.email ? <div>{errors.email}</div> : null}
            //   <button type="submit">Submit</button>
            // </Form>
          )}
        </Formik>
      </Content>
    </Container>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

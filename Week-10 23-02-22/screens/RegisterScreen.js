import {StyleSheet, View, SafeAreaView} from 'react-native';
import React from 'react';
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

const validateSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be no more than 50 characters')
    .required('Name is Required'),
  email: Yup.string().email('Invalid email').required('Email is Required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required('Password is Required'),
});

const RegisterScreen = () => {
  return (
    <Container>
      <Content padder>
        <Formik
          // the value name and startnig value
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validationSchema={validateSchema}
          onSubmit={values => {
            // same shape as initial values
            console.log(values);
          }}>
          {/*errors is for validating, touched is for when component is unclicked*/}
          {({errors, touched, values, handleChange, handleBlur}) => (
            <Form>
              <Item
                stackedLabel
                error={errors.name && touched.name ? true : false}>
                <Label>
                  Name{' '}
                  {errors.name && touched.name && (
                    <Icon name="close-circle-outline" />
                  )}
                </Label>
                <Input
                  value={values.name}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                />
              </Item>
              {errors.name && touched.name && (
                <Item>
                  <Label style={{color: 'red', fontSize: 10}}>
                    {errors.name}
                  </Label>
                </Item>
              )}
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
                  secureTextEntry={true}
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
                style={{marginTop: 30, backgroundColor: 'azure'}}>
                <Text
                  style={{color: 'dimgrey', fontSize: 20, fontWeight: 'bold'}}>
                  Register
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

export default RegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

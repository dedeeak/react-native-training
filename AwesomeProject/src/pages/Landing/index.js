/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, Button} from 'react-native';
const Landing = ({navigation}) => {
  return (
    <>
      <Text>Ini Landing</Text>
      <Button title="Login" onPress={() => navigation.navigate('Home')} />
    </>
  );
};
export default Landing;
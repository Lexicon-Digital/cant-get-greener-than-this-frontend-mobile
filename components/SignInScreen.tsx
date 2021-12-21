import React from 'react';
import {View, Text} from 'react-native';
import {Button, Divider} from 'react-native-paper';

// @ts-ignore
export function SignInScreen({navigation}) {
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {/* todo: nice app image here  */}
      <Button>Register me</Button>
      <Divider />
      <Text>Already a member?</Text>
      <Button onPress={() => navigation.navigate('Login')}>Login</Button>
    </View>
  );
}

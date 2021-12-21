import React from 'react';
import {View, Text} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import styled from 'styled-components';

// @ts-ignore
export function SignInScreen({navigation}) {
  return (
    <ViewContainer>
      {/* todo: nice app image here  */}
      <Button onPress={() => navigation.navigate('Register')}>Register me</Button>
      <Divider />
      <Text>Already a member?</Text>
      <Button onPress={() => navigation.navigate('Login')}>Login</Button>
    </ViewContainer>
  );
}

const ViewContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {Button, TextInput} from 'react-native-paper';

// @ts-ignore
export function LoginInScreen() {
  return (
    <ViewContainer>
      <TextInput label="Email" />
      <TextInput label="Password" secureTextEntry={true} />
      <Button
        onPress={() => {
          console.log('Submit pressed');
        }}>
        Login
      </Button>
    </ViewContainer>
  );
}

const ViewContainer = styled(View)`
  flex-direction: column;
`;

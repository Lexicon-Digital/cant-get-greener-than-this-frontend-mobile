import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {TextInput, Button} from 'react-native-paper';

export function RegisterScreen() {
  return (
    <ViewContainer>
      <TextInput label="First name" />
      <TextInput label="Last name" />
      <TextInput label="Email" />
      <TextInput label="Password" secureTextEntry={true} />
      <TextInput label="Password2" secureTextEntry={true} />
      <Button
        onPress={() => {
          console.log('Submit pressed');
        }}>
        Submit
      </Button>
    </ViewContainer>
  );
}

const ViewContainer = styled(View)`
  flex-direction: column;
`;

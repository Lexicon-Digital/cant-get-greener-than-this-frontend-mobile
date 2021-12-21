import React from 'react';
import {View, Text} from 'react-native';
import styled from 'styled-components';
import {TextInput, Button} from 'react-native-paper';
import {TEXT_INPUT_STYLE} from '../constants';

export function RegisterScreen() {
  return (
    <ViewContainer>
      <TextInput label="First name" style={TEXT_INPUT_STYLE} />
      <TextInput label="Last name" style={TEXT_INPUT_STYLE} />
      <TextInput label="Email" style={TEXT_INPUT_STYLE} />
      <TextInput
        label="Password"
        secureTextEntry={true}
        style={TEXT_INPUT_STYLE}
      />
      <TextInput
        label="Password2"
        secureTextEntry={true}
        style={TEXT_INPUT_STYLE}
      />
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

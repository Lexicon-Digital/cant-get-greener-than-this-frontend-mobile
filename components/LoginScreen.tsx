import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {Button, TextInput} from 'react-native-paper';
import {AppContext} from '../AppContext';

// @ts-ignore
export function LoginInScreen({navigation}) {
  const appContext = React.useContext(AppContext);
  return (
    <ViewContainer>
      <TextInput label="Email" />
      <TextInput label="Password" secureTextEntry={true} />
      <Button
        onPress={() => {
          appContext?.signIn();
          navigation.goBack();
        }}>
        Login
      </Button>
    </ViewContainer>
  );
}

const ViewContainer = styled(View)`
  flex-direction: column;
`;

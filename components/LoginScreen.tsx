import React from 'react';
import {View} from 'react-native';
import styled from 'styled-components';
import {Button, TextInput} from 'react-native-paper';
import {AppContext} from '../AppContext';
import {TEXT_INPUT_STYLE} from '../constants';
import {StackNavigationProp} from '@react-navigation/stack/src/types';
import {ParamListBase} from '@react-navigation/native';

export function LoginInScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  const appContext = React.useContext(AppContext);
  return (
    <ViewContainer>
      <TextInput label="Email" style={TEXT_INPUT_STYLE} />
      <TextInput
        label="Password"
        secureTextEntry={true}
        style={TEXT_INPUT_STYLE}
      />
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

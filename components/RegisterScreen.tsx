import React, {useState} from 'react';
import {ActivityIndicator, ScrollView, View} from 'react-native';
import styled from 'styled-components';
import {Button, TextInput} from 'react-native-paper';
import {TEXT_INPUT_STYLE} from '../constants';
import {StackNavigationProp} from '@react-navigation/stack/src/types';
import {ParamListBase} from '@react-navigation/native';
import {AppContext} from '../AppContext';

export function RegisterScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  const [spinner, setSpinner] = useState(false);
  const appContext = React.useContext(AppContext);
  return (
    <>
      {spinner ? (
        <CenterContainer>
          <ActivityIndicator size="large" />
        </CenterContainer>
      ) : (
        <ViewContainer>
          <TextInput label="First name" style={TEXT_INPUT_STYLE} />
          <TextInput label="Last name" style={TEXT_INPUT_STYLE} />
          <TextInput label="Email" style={TEXT_INPUT_STYLE} />
          <TextInput
            label="Password"
            secureTextEntry={true}
            style={TEXT_INPUT_STYLE}
          />
          <Button
            onPress={() => {
              setSpinner(true);
              setTimeout(() => {
                appContext?.registerUser();
                navigation.goBack();
              }, 2000);
            }}>
            Submit
          </Button>
        </ViewContainer>
      )}
    </>
  );
}

const ViewContainer = styled(ScrollView)`
  flex-direction: column;
`;

const CenterContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

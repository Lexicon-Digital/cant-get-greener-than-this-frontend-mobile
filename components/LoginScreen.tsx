import React, {useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import styled from 'styled-components';
import {Button, TextInput} from 'react-native-paper';
import {AppContext} from '../AppContext';
import {TEXT_INPUT_STYLE} from '../constants';

export function LoginInScreen() {
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
                appContext?.signIn();
              }, 2000);
            }}>
            Login
          </Button>
        </ViewContainer>
      )}
    </>
  );
}

const ViewContainer = styled(View)`
  flex-direction: column;
`;

const CenterContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components';

export function HomeScreen() {
  return (
    <HomeContainer>
      <HomeButton mode="outlined" onPress={() => console.log('Pressed')}>
        Map View
      </HomeButton>
      <HomeButton mode="outlined" onPress={() => console.log('Pressed')}>
        Scan
      </HomeButton>
    </HomeContainer>
  );
}

const HomeContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HomeButton = styled(Button)`
  margin: 16px;
`;

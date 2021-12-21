import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components';

export function HomeScreen({navigation}: {navigation: any}) {
  return (
    <HomeContainer>
      <HomeButton
        mode="outlined"
        onPress={() => navigation.navigate('Map View')}>
        Map View
      </HomeButton>
      <HomeButton mode="outlined" onPress={() => navigation.navigate('Scan')}>
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

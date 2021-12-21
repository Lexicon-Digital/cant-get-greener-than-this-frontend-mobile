import React from 'react';
import {View} from 'react-native';
import {Button} from 'react-native-paper';
import styled from 'styled-components';

export function MyProfileScreen({navigation}: {navigation: any}) {
  return <HomeContainer></HomeContainer>;
}

const HomeContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HomeButton = styled(Button)`
  margin: 16px;
`;

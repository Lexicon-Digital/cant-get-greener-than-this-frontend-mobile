import React, {useEffect} from 'react';
import {View, Text, Image, Dimensions} from 'react-native';
import {Button, Divider} from 'react-native-paper';
import styled from 'styled-components';
import {StackNavigationProp} from '@react-navigation/stack/src/types';
import {ParamListBase} from '@react-navigation/native';
import {IMAGE_BACKGROUND, IMAGE_PLANET} from '../images';

// Store width in variable
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

export function SignInScreen({
  navigation,
}: {
  navigation: StackNavigationProp<ParamListBase>;
}) {
  return (
    <ViewContainer>
      <Image
        style={{width: width, height: height * 0.75}}
        source={IMAGE_BACKGROUND}
      />
      <Button onPress={() => navigation.navigate('Register')}>Register</Button>
      <Divider />
      <Button onPress={() => navigation.navigate('Login')}>Login</Button>
    </ViewContainer>
  );
}

const ViewContainer = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

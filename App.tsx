import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './components/HomeScreen';
import {SignInScreen} from './components/SignInScreen';
import {RegisterScreen} from './components/RegisterScreen';
import {LoginInScreen} from './components/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  const isSignedIn = false;

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <Stack.Screen name="Home" component={HomeScreen} />
          ) : (
            <>
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="Login" component={LoginInScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './components/HomeScreen';
import {MapScreen} from './components/MapScreen';
import {SignInScreen} from './components/SignInScreen';
import {RegisterScreen} from './components/RegisterScreen';
import {LoginInScreen} from './components/LoginScreen';

const Stack = createStackNavigator();

export interface AppContextInterface {
  registerUser: () => void;
}

export const AppContext = React.createContext<AppContextInterface | null>(null);

export default function App() {
  const isSignedIn = true;

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
          {isSignedIn ? (
            <>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Map View" component={MapScreen} />
            </>
          ) : (
            <>
              <Stack.Screen
                name="SignIn"
                component={SignInScreen}
                options={{
                  title: 'Hackathon frontend app :)',
                }}
              />
              <Stack.Screen name="Login" component={LoginInScreen} />
              <Stack.Screen name="Register" component={RegisterScreen} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
}

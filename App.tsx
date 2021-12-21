import React, {useState} from 'react';
import {Button, Provider as PaperProvider} from 'react-native-paper';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import ErrorBoundary from 'react-native-error-boundary';
import {HomeScreen} from './components/HomeScreen';
import {MapScreen} from './components/MapScreen';
import {SignInScreen} from './components/SignInScreen';
import {RegisterScreen} from './components/RegisterScreen';
import {LoginInScreen} from './components/LoginScreen';
import {View, Text} from 'react-native';
import {MyProfileScreen} from './components/MyProfileScreen';
const Stack = createStackNavigator();

export interface AppContextInterface {
  signIn: () => void;
  registerUser: () => void;
}

export const AppContext = React.createContext<AppContextInterface | null>(null);

const CustomFallback = (props: {error: Error; resetError: Function}) => (
  <View>
    <Text>Something happened!</Text>
    <Text>{props.error.toString()}</Text>
    <Button
      onPress={() => {
        props.resetError;
      }}>
      Try again
    </Button>
  </View>
);

export default function App() {
  const [isSignedIn, setSignedIn] = useState<boolean>(false);
  const appContext: AppContextInterface = {
    signIn: () => {
      setSignedIn(true);
    },
    registerUser: () => {},
  };

  return (
    <PaperProvider>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <AppContext.Provider value={appContext}>
          <NavigationContainer>
            <Stack.Navigator>
              {isSignedIn ? (
                <>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="My Profile" component={MyProfileScreen} />
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
        </AppContext.Provider>
      </ErrorBoundary>
    </PaperProvider>
  );
}

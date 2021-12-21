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
import {Text, View} from 'react-native';
import {ScanScreen} from './components/ScanScreen';
import {MyProfileScreen} from './components/MyProfileScreen';
import {AppContextInterface, AppContext} from './AppContext';
import {CustomNavigationBar} from './components/CustomNavigationBar';
import {LogBox} from 'react-native';

LogBox.ignoreLogs(['EventEmitter.removeListener']);

const Stack = createStackNavigator();

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
    signOut: () => {
      setSignedIn(false);
    },
    isSignedIn: () => {
      return isSignedIn;
    },
    registerUser: () => {},
  };

  return (
    <PaperProvider>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <AppContext.Provider value={appContext}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                header: props => <CustomNavigationBar {...props} />,
              }}>
              {isSignedIn ? (
                <>
                  <Stack.Screen name="Home" component={HomeScreen} />
                  <Stack.Screen name="My Profile" component={MyProfileScreen} />
                  <Stack.Screen name="Map View" component={MapScreen} />
                  <Stack.Screen name="Scan" component={ScanScreen} />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="SignIn"
                    component={SignInScreen}
                    options={{
                      title: 'Awesome hackathon green app',
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

import React, {useState} from 'react';
import {
  Button,
  DefaultTheme,
  Provider as PaperProvider,
  Snackbar,
} from 'react-native-paper';
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
import {GasDiscountHistory} from './components/GasDiscountHistory';
import {AppContextInterface, AppContext} from './AppContext';
import {CustomNavigationBar} from './components/CustomNavigationBar';
import {LogBox} from 'react-native';
import {AboutScreen} from './components/AboutScreen';

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

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#0c8a28',
    accent: '#f1c40f',
  },
};

export default function App() {
  const [isSignedIn, setSignedIn] = useState<boolean>(false);
  const [snackBarText, setSnackBarText] = React.useState('');
  const onDismissSnackBar = () => setSnackBarText('');

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
    registerUser: () => {
      setSnackBarText('User registered');
    },
  };

  return (
    <PaperProvider theme={theme}>
      <ErrorBoundary FallbackComponent={CustomFallback}>
        <AppContext.Provider value={appContext}>
          <NavigationContainer>
            <Stack.Navigator
              screenOptions={{
                header: props => <CustomNavigationBar {...props} />,
              }}>
              {isSignedIn ? (
                <>
                  <Stack.Screen
                    name="Home"
                    component={HomeScreen}
                    options={{
                      title: 'Home',
                    }}
                  />
                  <Stack.Screen
                    name="Gas discount history"
                    component={GasDiscountHistory}
                    options={{
                      title: 'Gas discount history',
                    }}
                  />
                  <Stack.Screen
                    name="Map View"
                    component={MapScreen}
                    options={{
                      title: 'Map',
                    }}
                  />
                  <Stack.Screen
                    name="Scan"
                    component={ScanScreen}
                    options={{
                      title: 'Scan QR code',
                    }}
                  />
                  <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                      title: 'About',
                    }}
                  />
                </>
              ) : (
                <>
                  <Stack.Screen
                    name="Sign In"
                    component={SignInScreen}
                    options={{
                      title: 'Sign in',
                    }}
                  />
                  <Stack.Screen
                    name="Login"
                    component={LoginInScreen}
                    options={{
                      title: 'Log in',
                    }}
                  />
                  <Stack.Screen
                    name="Register"
                    component={RegisterScreen}
                    options={{
                      title: 'Registration',
                    }}
                  />
                  <Stack.Screen
                    name="About"
                    component={AboutScreen}
                    options={{
                      title: 'About',
                    }}
                  />
                </>
              )}
            </Stack.Navigator>
          </NavigationContainer>
        </AppContext.Provider>
        <Snackbar
          visible={snackBarText !== ''}
          duration={2000}
          onDismiss={onDismissSnackBar}>
          {snackBarText}
        </Snackbar>
      </ErrorBoundary>
    </PaperProvider>
  );
}

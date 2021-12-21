import React from 'react';
import {Appbar, Menu} from 'react-native-paper';
import {ParamListBase, Route} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack/src/types';
import {AppContext} from '../AppContext';

export function CustomNavigationBar({
  navigation,
  back,
  route,
}: {
  navigation: StackNavigationProp<ParamListBase>;
  back?: {
    title: string;
  };
  route: Route<string>;
}) {
  const appContext = React.useContext(AppContext);
  const [visible, setVisible] = React.useState(false);
  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
      <Appbar.Content title={'The Green App'} subtitle={route.name} />
      {!back && appContext?.isSignedIn() ? (
        <Appbar.Action
          icon="chart-line"
          onPress={() => navigation.navigate('Home')}
        />
      ) : null}
      {!back && appContext?.isSignedIn() ? (
        <Appbar.Action
          icon="map"
          onPress={() => navigation.navigate('Map View')}
        />
      ) : null}
      {!back && appContext?.isSignedIn() ? (
        <Appbar.Action
          icon="fuel"
          onPress={() => navigation.navigate('Redemption history')}
        />
      ) : null}
      {!back && appContext?.isSignedIn() ? (
        <Appbar.Action
          icon="qrcode"
          onPress={() => navigation.navigate('Scan')}
        />
      ) : null}
      {!back ? (
        <Menu
          visible={visible}
          onDismiss={closeMenu}
          anchor={
            <Appbar.Action icon="menu" color="white" onPress={openMenu} />
          }>
          {appContext?.isSignedIn() && (
            <Menu.Item
              onPress={() => {
                closeMenu();
                appContext?.signOut();
              }}
              title="Log out"
            />
          )}
          <Menu.Item
            onPress={() => {
              closeMenu();
              navigation.navigate('About');
            }}
            title="About"
          />
        </Menu>
      ) : null}
    </Appbar.Header>
  );
}

import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import {View} from 'react-native';
import styled from 'styled-components';
import {SYDNEY_COORDINATORS, PETROL_STATIONS} from '../constants/map';

export function MapScreen() {
  return (
    <Container>
      <MapView initialRegion={SYDNEY_COORDINATORS} style={{flex: 1}}>
        {PETROL_STATIONS.map(({name, latitude, longitude, description}) => (
          <Marker
            key={name}
            coordinate={{latitude, longitude}}
            title={name}
            description={description}
          />
        ))}
      </MapView>
    </Container>
  );
}

const Container = styled(View)`
  flex: 1;
`;

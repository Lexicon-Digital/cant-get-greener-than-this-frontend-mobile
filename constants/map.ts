export const SYDNEY_COORDINATORS = {
  latitude: -33.8688,
  longitude: 151.2093,
  latitudeDelta: 0.0922,
  longitudeDelta: 0.0421,
};

type PetrolStation = {
  name: string;
  latitude: number;
  longitude: number;
  description?: string;
};

export const PETROL_STATIONS: PetrolStation[] = [
  {
    name: 'Shell Coles Express Woolloomooloo',
    description: 'up to 6% discount',
    latitude: -33.86736696000395,
    longitude: 151.22461338562357,
  },
  {
    name: 'Shell Coles Express Ultimo',
    description: 'up to 5% discount',
    latitude: -33.87810470176901,
    longitude: 151.1973185232424,
  },
  {
    name: 'Metro Petroleum Cremorne',
    description: 'up to 5% discount',
    latitude: -33.83009694126923,
    longitude: 151.2320037561936,
  },
  {
    name: 'Budget Petrol Chippendale',
    description: 'up to 4% discount',
    latitude: -33.88576560332474,
    longitude: 151.20225407624187,
  },
];

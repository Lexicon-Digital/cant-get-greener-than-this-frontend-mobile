import React, {useEffect} from 'react';
import {Dimensions, ScrollView, View} from 'react-native';
import {Button, Divider, Text, Title} from 'react-native-paper';
import styled from 'styled-components';
import {LineChart, ProgressChart} from 'react-native-chart-kit';

function hexToRGB(hex: string, alpha: string) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

  return `rgb(${r}, ${g}, ${b})`;
}

export function HomeScreen() {
  const colors = ['#3dfc03', '#fceb03'];
  // each value represents a goal ring in Progress chart
  const data = {
    labels: ['Goal', 'Now'], // optional
    data: [0.8, 0.5],
  };
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1, index: any) =>
      index !== undefined
        ? hexToRGB(colors[index], `${opacity}`)
        : `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  return (
    <HomeContainer>
      <Row>
        <Box style={{backgroundColor: '#fc7b03'}}>
          <Column>
            <Title>CO2</Title>
            <Text>Goal: 3.0t</Text>
            <Text>Current: 2.1t</Text>
          </Column>
        </Box>
        <Box style={{backgroundColor: '#37ab1a'}}>
          <Column>
            <Title>Discount</Title>
            <Text>$156.0</Text>
          </Column>
        </Box>
      </Row>
      <Divider />
      <Text>CO2 target reduction goal</Text>
      <ProgressChart
        data={data}
        width={Dimensions.get('window').width}
        height={220}
        strokeWidth={16}
        radius={32}
        chartConfig={chartConfig}
        hideLegend={false}
      />
      <Divider />
      <Text>Distance saved</Text>
      <LineChart
        data={{
          labels: ['January', 'February', 'March', 'April', 'May', 'June'],
          datasets: [
            {
              data: [
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
                Math.floor(Math.random() * 100),
              ],
            },
          ],
        }}
        width={Dimensions.get('window').width}
        height={220}
        yAxisLabel=""
        yAxisSuffix="km"
        yAxisInterval={1} // optional, defaults to 1
        chartConfig={{
          backgroundColor: '#e26a00',
          backgroundGradientFrom: '#fb8c00',
          backgroundGradientTo: '#ffa726',
          decimalPlaces: 0, // optional, defaults to 2dp
          color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
          propsForDots: {
            r: '6',
            strokeWidth: '2',
            stroke: '#ffa726',
          },
        }}
        bezier
        style={{
          marginVertical: 8,
          // borderRadius: 16,
        }}
      />
    </HomeContainer>
  );
}

const HomeContainer = styled(ScrollView)`
  flex-direction: column;
  margin: 10px;
`;

const Column = styled(View)`
  flex-direction: column;
  text-align: center;
`;

const Row = styled(View)`
  flex-direction: row;
`;

const Box = styled(View)`
  flex-grow: 1
  height: auto;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 5px;
  border: 1px;
  padding: 5px;
`;

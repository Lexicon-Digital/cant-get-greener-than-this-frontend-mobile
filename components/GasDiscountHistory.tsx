import React, {useEffect} from 'react';
import {View} from 'react-native';
import {
  Button,
  Headline,
  Subheading,
  List,
  Card,
  Title,
  Paragraph,
} from 'react-native-paper';
import styled from 'styled-components';
import {SAVE_RECORDS} from '../constants/profile';
import {AppContext} from '../AppContext';

export function GasDiscountHistory() {
  return (
    <HomeContainer>
      <Headline>Thank you!</Headline>
      <Subheading>
        You have saved the earth 0.32 metric tons of CO2 and earned $134.7
      </Subheading>

      <SavesContainer>
        <Card.Content>
          <Title>Earned Gas Discounts</Title>
          {SAVE_RECORDS.map(({amount, date}) => (
            <List.Item
              key={amount}
              title={`Saved $${amount}`}
              description={date}
              left={props => (
                <IconContainer>
                  <Paragraph>🌿</Paragraph>
                </IconContainer>
              )}
            />
          ))}
        </Card.Content>
      </SavesContainer>
    </HomeContainer>
  );
}

const HomeContainer = styled(View)`
  flex: 1;
  padding: 24px;
  justify-content: flex-start;
  align-items: flex-start;
`;

const IconContainer = styled(View)`
  justify-content: center;
  align-items: center;
`;

const SavesContainer = styled(Card)`
  flex: 1;
  margin-top: 24px;
`;

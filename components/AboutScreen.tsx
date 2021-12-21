import React, {useEffect} from 'react';
import {ScrollView, Text} from 'react-native';
import styled from 'styled-components';
import {Avatar, Card, Paragraph, Title} from 'react-native-paper';
import {IMAGE_KENNY, IMAGE_STAN, IMAGE_ZHENG} from '../images';
import {AppContext} from '../AppContext';

export function AboutScreen() {
  return (
    <ViewContainer>
      <Card>
        <Card.Content>
          <Title>The winning team</Title>
          <Paragraph>
            Meet the guys behind can't get greener than this initiative.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card>
        <Card.Title
          title="The dreamer"
          subtitle=""
          left={props => <Avatar.Image {...props} source={IMAGE_ZHENG} />}
        />
        <Card.Content>
          <Paragraph>
            A self-confessed crypto geek who dreams of world domination through
            the power of keyboard.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card>
        <Card.Title
          title="The happy go lucky"
          subtitle=""
          left={props => <Avatar.Image {...props} source={IMAGE_STAN} />}
        />
        <Card.Content>
          <Paragraph>
            The nicest guy in the planet who happens to lead.. how unorthodox.
          </Paragraph>
        </Card.Content>
      </Card>
      <Card>
        <Card.Title
          title="The grunt"
          subtitle=""
          left={props => <Avatar.Image {...props} source={IMAGE_KENNY} />}
        />
        <Card.Content>
          <Paragraph>
            Kenny likes to bore himself with work.. just give him anything
            except chasing up people.
          </Paragraph>
        </Card.Content>
      </Card>
    </ViewContainer>
  );
}

const ViewContainer = styled(ScrollView)`
  flex-direction: column;
  margin: 5px;
`;

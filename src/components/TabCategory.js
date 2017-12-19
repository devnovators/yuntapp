import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content, Card, CardItem, Label, Input, Text, Body, Item, Title } from 'native-base';
import KudosCompetency from '../components/KudosCompetency';
import ModalFeedback from '../components/ModalFeedback';

class TabCategory extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Content padder>
        <Card>
          <CardItem header bordered={true}>
            <Text>Competencia</Text>
          </CardItem>
          <CardItem>
            <Body>
              <KudosCompetency/>
              <ModalFeedback/>
            </Body>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

export default TabCategory
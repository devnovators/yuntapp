import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Header, Body, Title, Left, Right, Button, Icon } from 'native-base';

export default class HeaderYuntapp extends Component {
  constructor(props){
    super(props)
  }

  onPressBack() {
    Actions.pop();
  }

  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={this.onPressBack}>
            <Icon name='arrow-back' />
          </Button>
        </Left>
        <Body>
          <Title>Yuntapp</Title>
        </Body>
        <Right/>
      </Header>
    );
  }
}

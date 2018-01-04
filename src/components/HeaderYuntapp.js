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
    let button = null;
    if (this.props.pop) {
      button = 
          <Button transparent onPress={this.onPressBack}>
            <Icon name='arrow-back' />
          </Button>;
    }
    return (
      <Header>
        <Left>
          {button}
        </Left>
        <Body>
          <Title>Yuntapp</Title>
        </Body>
        <Right>
          <Button transparent onPress={this.props.onPressMenu}>
            <Icon name='menu' />
          </Button>
        </Right>
      </Header>
    );
  }
}
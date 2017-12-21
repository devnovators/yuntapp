import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Left, Thumbnail, Body, Text, Button } from 'native-base';

class CardTeam extends Component {
  constructor(){
    super()
  }

  render() {
    return (
      <Card>
        <CardItem button onPress={this.props.onPressCard}>
          <Left>
            <Thumbnail 
            source={{uri: 'http://reels.syntheticpictures.com/img/directors/blank-avatar.png'}} />
            <Body>
              <Text>{this.props.role}</Text>
              <Text note>{this.props.name}</Text>
            </Body>
          </Left>
        </CardItem>
      </Card>
    );
  }
}

CardTeam.propTypes = {
  onPressCard: PropTypes.func.isRequired,
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default CardTeam
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Card, CardItem, Left, Thumbnail, Body, Text, Button } from 'native-base';

class CardTeam extends Component {
  constructor(props){
    super(props)

    //this.handleSubmit = this.handleSubmit.bind(this);

  }

  onPressCard() {
    Actions.appreciation();
  }

  render() {
    return (
      <Card>
        <CardItem button onPress={this.onPressCard}>
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
  role: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default CardTeam
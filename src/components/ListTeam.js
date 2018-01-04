import React, { Component } from 'react';
import { Content } from 'native-base';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import CardTeam from '../components/CardTeam';
import { Alert } from 'react-native';

class ListTeam extends Component {
  constructor(){
    super();
  }

  onPressCard(key) {
    Actions.appreciation({ peers: this.props.peers, peer: key, id: this.props.id });
  }

  render() {
    return (
      <Content padder>
        {
        this.props.peers.map((item, key) => (
        <CardTeam key={item.key} name={item.name} role={item.role} 
        onPressCard={() => this.onPressCard(key)} 
        />
          ))
        }
      </Content>
    );
  }
}

ListTeam.propTypes = {
  peers: PropTypes.array.isRequired,
  id: PropTypes.string.isRequired
}

export default ListTeam
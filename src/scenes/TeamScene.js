import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import HeaderYuntapp from '../components/HeaderYuntapp';
import CardTeam from '../components/CardTeam';
import ListTeam from '../components/ListTeam';

import firebase from 'react-native-firebase';

export default class TeamScene extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      role: '',
      peers: []
    };
  }

  componentDidMount() {
    //firebase.database().ref('prueba/pesanchez_bbva_com').on('value', (snapshot)=>{

    firebase.database().ref(this.props.id).once('value').then((snapshot)=>{
      var items=[];
      Object.keys(snapshot.val().peers).sort().forEach(key => {
        var item = snapshot.val().peers[key];
        item.key = key;
        items.push(item);
      });
      this.setState({
        name: snapshot.val().name,
        role: snapshot.val().role,
        peers: items
      });
    });
  }

  render() {
    return (
      <Container>
        <HeaderYuntapp />
        <ListTeam peers={this.state.peers} />
      </Container>
    );
  }
}

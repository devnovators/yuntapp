import React, { Component } from 'react';
import { Container, Content } from 'native-base';
import HeaderYuntapp from '../components/HeaderYuntapp';
import CardTeam from '../components/CardTeam';

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

    firebase.database().ref('prueba/'+this.props.id).once('value').then((snapshot)=>{
      this.setState({
        name: snapshot.val().name,
        role: snapshot.val().role
      });
    });
    firebase.database().ref('prueba/'+this.props.id+'/peers').once('value').then((snapshot)=>{
      var items=[];
      snapshot.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.key;
        items.push(item);
      });
      this.setState({
        peers: items
      });
    });
  }

  render() {
    return (
      <Container>
        <HeaderYuntapp />
        <Content padder>
          {
          this.state.peers.map(item => (
          <CardTeam key={item.key} id={item.key} name={item.name} role={item.role} />
            ))
          }
        </Content>
      </Container>
    );
  }
}

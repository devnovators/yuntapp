import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import HeaderYuntapp from '../components/HeaderYuntapp';
import FooterAppreciation from '../components/FooterAppreciation';
import TabCategory from '../components/TabCategory';

import firebase from 'react-native-firebase';

export default class AppreciationScene extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      role: '',
      category: [],
      peer: this.props.peer,
      peers: this.props.peers
    };
  }

  componentDidMount() {
    firebase.database().ref('prueba/pesanchez_bbva_com/peers/'+this.props.peers[this.props.peer].key).once('value').then((snapshot)=>{
      this.setState({
        name: snapshot.val().name,
        role: snapshot.val().role
      });
    });
    firebase.database().ref('prueba/pesanchez_bbva_com/peers/'+this.props.peers[this.props.peer].key+'/category').once('value').then((snapshot)=>{
      var items=[];
      snapshot.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.key;
        items.push(item);
      });
      this.setState({
        category: items
      });
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({peer: nextProps.peer, peers: nextProps.peers});
    firebase.database().ref('prueba/pesanchez_bbva_com/peers/'+nextProps.peers[nextProps.peer].key).once('value').then((snapshot)=>{
      this.setState({
        name: snapshot.val().name,
        role: snapshot.val().role
      });
    });
    firebase.database().ref('prueba/pesanchez_bbva_com/peers/'+nextProps.peers[nextProps.peer].key+'/category').once('value').then((snapshot)=>{
      var items=[];
      snapshot.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.key;
        items.push(item);
      });
      this.setState({
        category: items
      });
    });
  }

  render() {
    return (
      <Container>
        <HeaderYuntapp />
        <Tabs initialPage={0}>
          {
          this.state.category.map(item => (
            <Tab key={item.key} heading={item.key} style={{backgroundColor: 'transparent'}}>
              <TabCategory id={item.key} peer={this.state.peers[this.state.peer].key} />
            </Tab>
            ))
          }
        </Tabs>
        <FooterAppreciation peers={this.state.peers} peer={this.state.peer} />
      </Container>
    );
  }
}

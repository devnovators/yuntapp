import React, { Component } from 'react';
import { Container, Content, Drawer } from 'native-base';
import HeaderYuntapp from '../components/HeaderYuntapp';
import CardTeam from '../components/CardTeam';
import ListTeam from '../components/ListTeam';
import Menu from '../components/Menu';

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

  closeDrawer(){
    this._drawer._root.close()
  }
  openDrawer(){
    this._drawer._root.open()
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
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<Menu/>}
        onClose={() => this.closeDrawer()} side={'right'} >
        <Container>
          <HeaderYuntapp pop={false} onPressMenu={() => this.openDrawer()} />
          <ListTeam peers={this.state.peers} id={this.props.id} />
        </Container>
      </Drawer>
    );
  }
}

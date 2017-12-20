import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import HeaderYuntapp from '../components/HeaderYuntapp';
import FooterAppreciation from '../components/FooterAppreciation';
import TabCategory from '../components/TabCategory';

import firebase from 'react-native-firebase';

export default class AppreciationScene extends Component {

  constructor() {
    super();
    this.state = {
      name: '',
      role: '',
      category: []
    };
  }

  componentDidMount() {
    firebase.database().ref('prueba/pesanchez_bbva_com/peers/'+this.props.peer).once('value').then((snapshot)=>{
      this.setState({
        name: snapshot.val().name,
        role: snapshot.val().role
      });
    });
    firebase.database().ref('prueba/pesanchez_bbva_com/peers/'+this.props.peer+'/category').once('value').then((snapshot)=>{
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
              <TabCategory id={item.key} peer={this.props.peer} />
            </Tab>
            ))
          }
        </Tabs>
        <FooterAppreciation />
      </Container>
    );
  }
}

import React, { Component } from 'react';
import { Container, Tab, Tabs, Drawer } from 'native-base';
import HeaderYuntapp from '../components/HeaderYuntapp';
import FooterAppreciation from '../components/FooterAppreciation';
import TabCategory from '../components/TabCategory';
import Menu from '../components/Menu';

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

  closeDrawer(){
    this._drawer._root.close()
  }
  openDrawer(){
    this._drawer._root.open()
  }

  componentDidMount() {
    firebase.database().ref(this.props.id+'/peers/'+this.props.peers[this.props.peer].key).once('value').then((snapshot)=>{
      this.setState({
        name: snapshot.val().name,
        role: snapshot.val().role
      });
    });
    var items=[];
    var category=this.props.peers[this.props.peer].category;
    Object.keys(category).sort().forEach(key => {
      var item = category[key];
      item.key = key;
      items.push(item);
    });
    this.setState({
      category: items
    });
  }

  componentWillReceiveProps(nextProps) {
    this.setState({peer: nextProps.peer, peers: nextProps.peers});
    firebase.database().ref(nextProps.id+'/peers/'+nextProps.peers[nextProps.peer].key).once('value').then((snapshot)=>{
      this.setState({
        name: snapshot.val().name,
        role: snapshot.val().role
      });
    });
    var items=[];
    var category=nextProps.peers[nextProps.peer].category;
    Object.keys(category).sort().forEach(key => {
      var item = category[key];
      item.key = key;
      items.push(item);
    });
    this.setState({
      category: items
    });
  }

  render() {
    return (
      <Drawer
        ref={(ref) => { this._drawer = ref; }}
        content={<Menu/>}
        onClose={() => this.closeDrawer()} side={'right'} >
        <Container>
          <HeaderYuntapp pop={true} onPressMenu={() => this.openDrawer()} />
          <Tabs initialPage={0}>
            {
            this.state.category.map(item => (
              <Tab key={item.key} heading={item.name} style={{backgroundColor: 'transparent'}}>
                <TabCategory id={this.props.id} category={item.key} peer={this.state.peers[this.state.peer].key} />
              </Tab>
              ))
            }
          </Tabs>
          <FooterAppreciation peers={this.state.peers} peer={this.state.peer} />
        </Container>
      </Drawer>
    );
  }
}

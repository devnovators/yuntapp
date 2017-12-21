import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Footer, FooterTab, Button, Text } from 'native-base';

class FooterAppreciation extends Component {
  constructor(props){
    super(props);
    this.beforeName='';
    this.beforePeer=null;
    this.afterName='';
    this.afterPeer=null;
    if(this.props.peer>0){
      this.beforeName=this.props.peers[this.props.peer-1].name;
      this.beforePeer=this.props.peer-1;
    }
    if(this.props.peer<this.props.peers.length-1){
      this.afterName=this.props.peers[this.props.peer+1].name;
      this.afterPeer=this.props.peer+1;
    }
    this.before = this.before.bind(this);
    this.after = this.after.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.beforeName='';
    this.beforePeer=null;
    this.afterName='';
    this.afterPeer=null;
    if(nextProps.peer>0){
      this.beforeName=nextProps.peers[nextProps.peer-1].name;
      this.beforePeer=nextProps.peer-1;
    }
    if(nextProps.peer<nextProps.peers.length-1){
      this.afterName=nextProps.peers[nextProps.peer+1].name;
      this.afterPeer=nextProps.peer+1;
    }
  }

  before() {
    if(this.beforePeer!=null){
      Actions.refresh({ peers: this.props.peers, peer: this.beforePeer});
    }
  }

  after() {
    if(this.afterPeer!=null){
      Actions.refresh({ peers: this.props.peers, peer: this.afterPeer });
    }
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button onPress={this.before}>
            <Text>{this.beforeName}</Text>
          </Button>
          <Button onPress={this.after}>
            <Text>{this.afterName}</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

FooterAppreciation.propTypes = {
  peers: PropTypes.array.isRequired, 
  peer: PropTypes.number.isRequired
}

export default FooterAppreciation
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Content, Card, CardItem, Label, Input, Text, Body, Item, Title } from 'native-base';
import KudosCompetency from '../components/KudosCompetency';
import ModalFeedback from '../components/ModalFeedback';

import firebase from 'react-native-firebase';

class TabCategory extends Component {
  constructor(){
    super()
    this.state = {
      competency: []
    };
  }

  componentDidMount() {
    firebase.database()
    .ref('pesanchez_bbva_com/peers/'+this.props.peer+'/category/'+this.props.id+'/competency')
    .once('value').then((snapshot)=>{
      var items=[];
      snapshot.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.key;
        items.push(item);
      });
      this.setState({
        competency: items
      });
    });
  }

  render() {
    return (
      <Content padder>
         {
          this.state.competency.map(item => (
            <Card key={item.key}>
              <CardItem header bordered={true}>
                <Text>{item.name}</Text>
              </CardItem>
              <CardItem>
                <Body>
                  <KudosCompetency competency={item.key} category={this.props.id} 
                  peer={this.props.peer} kudo={item.kudo}/>
                  <ModalFeedback  competency={item.key} category={this.props.id} 
                  peer={this.props.peer} feedback={item.feedback}/>
                </Body>
              </CardItem>
            </Card>
            ))
          }
      </Content>
    );
  }
}

TabCategory.propTypes = {
  id: PropTypes.string.isRequired,
  peer: PropTypes.string.isRequired
}

export default TabCategory
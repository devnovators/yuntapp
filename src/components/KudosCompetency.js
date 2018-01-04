import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

import firebase from 'react-native-firebase';

class KudosCompetency extends Component {
  constructor(props){
    super(props);
    this.state = {
      kudo1: 'ios-medal-outline',
      kudo2: 'ios-medal-outline',
      kudo3: 'ios-medal-outline',
      kudo4: 'ios-medal-outline'
    };
    this.choice1 = this.choice1.bind(this);
    this.choice2 = this.choice2.bind(this);
    this.choice3 = this.choice3.bind(this);
    this.choice4 = this.choice4.bind(this);
  }

  componentDidMount() {
    if(this.props.kudo==1){
      this.choice1(false);
    }
    if(this.props.kudo==2){
      this.choice2(false);
    }
    if(this.props.kudo==3){
      this.choice3(false);
    }
    if(this.props.kudo==4){
      this.choice4(false);
    }
  }

  choice1(actualizar) {
      this.setState({
      kudo1: 'ios-medal', 
      kudo2: 'ios-medal-outline', 
      kudo3: 'ios-medal-outline', 
      kudo4: 'ios-medal-outline' });
      if(actualizar){
        firebase.database()
        .ref(this.props.id+'/peers/'+this.props.peer+'/category/'+this.props.category+'/competency/'+this.props.competency).update({
          kudo: 1
        });
      }
  }

  choice2(actualizar) {
      this.setState({
      kudo1: 'ios-medal-outline', 
      kudo2: 'ios-medal', 
      kudo3: 'ios-medal-outline', 
      kudo4: 'ios-medal-outline' });
      if(actualizar){
        firebase.database()
        .ref(this.props.id+'/peers/'+this.props.peer+'/category/'+this.props.category+'/competency/'+this.props.competency).update({
          kudo: 2
        });
      }
  }

  choice3(actualizar) {
      this.setState({
      kudo1: 'ios-medal-outline', 
      kudo2: 'ios-medal-outline', 
      kudo3: 'ios-medal', 
      kudo4: 'ios-medal-outline' });
      if(actualizar){
        firebase.database()
        .ref(this.props.id+'/peers/'+this.props.peer+'/category/'+this.props.category+'/competency/'+this.props.competency).update({
          kudo: 3
        });
      }
  }

  choice4(actualizar) {
      this.setState({
      kudo1: 'ios-medal-outline', 
      kudo2: 'ios-medal-outline', 
      kudo3: 'ios-medal-outline', 
      kudo4: 'ios-medal' });
      if(actualizar){
        firebase.database()
        .ref(this.props.id+'/peers/'+this.props.peer+'/category/'+this.props.category+'/competency/'+this.props.competency).update({
          kudo: 4
        });
      }
  }

  render() {
    return (
      <Grid style={{height : 50}}>
        <Col>
          <Icon style={{color: '#B87333'}} name={this.state.kudo1} onPress={this.choice1}/>
        </Col>
        <Col>
          <Icon style={{color: '#cd7f32'}} name={this.state.kudo2} onPress={this.choice2}/>
        </Col>
        <Col>
          <Icon style={{color: '#C0C0C0'}} name={this.state.kudo3} onPress={this.choice3}/>
        </Col>
        <Col>
          <Icon style={{color: '#D4AF37'}} name={this.state.kudo4} onPress={this.choice4}/>
        </Col>
      </Grid>
    );
  }
}

KudosCompetency.propTypes = {
  id: PropTypes.string.isRequired,
  competency: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  peer: PropTypes.string.isRequired,
  kudo: PropTypes.number.isRequired
}

export default KudosCompetency
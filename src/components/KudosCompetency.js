import React, { Component } from 'react';
import { Icon } from 'native-base';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class KudosCompetency extends Component {
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

  choice1() {
      this.setState({
       kudo1: 'ios-medal', 
       kudo2: 'ios-medal-outline', 
       kudo3: 'ios-medal-outline', 
       kudo4: 'ios-medal-outline' });
  }

  choice2() {
      this.setState({
       kudo1: 'ios-medal-outline', 
       kudo2: 'ios-medal', 
       kudo3: 'ios-medal-outline', 
       kudo4: 'ios-medal-outline' });
  }

  choice3() {
      this.setState({
       kudo1: 'ios-medal-outline', 
       kudo2: 'ios-medal-outline', 
       kudo3: 'ios-medal', 
       kudo4: 'ios-medal-outline' });
  }

  choice4() {
      this.setState({
       kudo1: 'ios-medal-outline', 
       kudo2: 'ios-medal-outline', 
       kudo3: 'ios-medal-outline', 
       kudo4: 'ios-medal' });
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

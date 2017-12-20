import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Button, Text, Label, Input, Item, Left, Right } from 'native-base';
import { Modal, View, StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

import firebase from 'react-native-firebase';

export default class ModalFeedback extends Component {

  constructor(props){
    super(props);
    this.state = {
      modalVisible: false,
      feedback: '',
      oldFeedback: ''
    };
    this.open = this.open.bind(this);
    this.cancelar = this.cancelar.bind(this);
    this.enviar = this.enviar.bind(this);
  }

  componentDidMount() {
    this.setState({
      feedback: this.props.feedback,
      oldFeedback: this.props.feedback
    });
  }

  open() {
    this.setState({modalVisible: true});
  }

  enviar() {
    firebase.database()
    .ref('prueba/pesanchez_bbva_com/peers/'+this.props.peer+'/category/'+this.props.category+'/'+this.props.competency).update({
      feedback: this.state.feedback
    });
    this.setState({
      modalVisible: false,
      oldFeedback: this.state.feedback
    });
  }

  cancelar() {
    this.setState({
      modalVisible: false,
      feedback: this.state.oldFeedback
    });
  }

  render() {
    return (
      <View style={{alignSelf: 'stretch'}}>
        <Button block onPress={this.open}>
          <Text>Feedback</Text>
        </Button>
        <Modal animationType="slide" transparent={true} 
          visible={this.state.modalVisible} onRequestClose={() => {}}>
          <View style={styles.main}>
            <View style={styles.box}>
              <Item floatingLabel  style={styles.textArea}>
                <Label>Feeback</Label>
                <Input multiline = {true} numberOfLines = {6} value={this.state.feedback} onChangeText={(feedback) => this.setState({feedback}) } />
              </Item>
              <Grid>
                <Col style={styles.col}>
                  <Button danger block onPress={this.cancelar}>
                    <Text>Cancelar</Text>
                  </Button>
                </Col>
                <Col style={styles.col}>
                  <Button block onPress={this.enviar}>
                    <Text>Enviar</Text>
                  </Button>
                </Col>
              </Grid>
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

ModalFeedback.propTypes = {
  competency: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  peer: PropTypes.string.isRequired,
  feedback: PropTypes.string.isRequired
}

const styles = StyleSheet.create({
  main: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  box: {
    flex: 1, 
    padding: 10,
    backgroundColor: '#fff',
    height: 210
  },
  textArea: {
    height: 130
  },
  col: {
    padding: 5
  }
});
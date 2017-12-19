import React, { Component } from 'react';
import { Button, Text, Label, Input, Item, Left, Right } from 'native-base';
import { Modal, View, StyleSheet } from 'react-native';
import { Col, Row, Grid } from 'react-native-easy-grid';

export default class ModalFeedback extends Component {

  state = {
    modalVisible: false,
  }

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  }

  render() {
    return (
      <View style={{alignSelf: 'stretch'}}>
        <Button block onPress={() => {this.setModalVisible(true)}}>
          <Text>Feedback</Text>
        </Button>
        <Modal animationType="slide" transparent={true} 
          visible={this.state.modalVisible} onRequestClose={() => {}}>
          <View style={styles.main}>
            <View style={styles.box}>
              <Item floatingLabel  style={styles.textArea}>
                <Label>Feeback</Label>
                <Input multiline = {true} numberOfLines = {6}/>
              </Item>
              <Grid>
                <Col style={styles.col}>
                  <Button danger block onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
                    <Text>Cancelar</Text>
                  </Button>
                </Col>
                <Col style={styles.col}>
                  <Button block onPress={() => {this.setModalVisible(!this.state.modalVisible)}}>
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
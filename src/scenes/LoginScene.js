import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Text, Button, View, Icon, H1 } from 'native-base';
import {StyleSheet} from 'react-native'

export default class LoginScene extends Component {
  onPressLogin() {
    Actions.team();
  }

  render() {
    return (
      <Container>
        <View style={styles.main}>
          <View style={styles.box}>
            <H1>Yuntapp</H1>
            <Button iconLeft block danger onPress={this.onPressLogin}>
              <Icon name='logo-googleplus' />
              <Text>Login</Text>
            </Button>
          </View>
        </View>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    flex: 1, 
    flexDirection: 'row', 
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 50,
    backgroundColor: '#006EC1',
  },
  box: {
    flex: 1, 
    height: 200, 
    backgroundColor: '#FFFFFF',
    alignItems: 'center', 
    padding: 10,
    justifyContent: 'space-between',
  }
});
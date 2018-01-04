import React, { Component } from 'react';
import { Content, List, ListItem, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';
import {GoogleSignin} from 'react-native-google-signin';

export default class Menu extends Component {

  componentWillMount() {
    GoogleSignin.configure({
        webClientId: '917668116026-86a58kb241a8ec1rms9j2uhgocemd6ih.apps.googleusercontent.com',
        iosClientId: '917668116026-jdk446foo07g91njcnm90nst78v677cf.apps.googleusercontent.com',
        hostedDomain: 'bbva.com'
    });
  }

  onPressOut() {
    GoogleSignin.signOut()
    .then(() => {
      Actions.reset('login');
    })
    .catch((err) => {

    });
  }

  render() {
    return (
      <Content style={{backgroundColor: '#ffffff'}} >
        <List>
          <ListItem onPress={this.onPressOut}>
            <Text>Cerrar Sesion</Text>
          </ListItem>
        </List>
      </Content>
    );
  }
}
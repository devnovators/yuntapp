import React, { Component } from 'react';
import { Actions } from 'react-native-router-flux';
import { Container, Text, Button, View, Icon, H1, Spinner } from 'native-base';
import {StyleSheet} from 'react-native'
import {GoogleSignin} from 'react-native-google-signin';

export default class LoginScene extends Component {
  constructor() {
    super();
    this.state = {
      login: false
    };
  }

  onPressLogin() {
    GoogleSignin.signIn()
    .then((user) => {
      var email= user.email;
      email=email.replace(/\./g,'_');
      email=email.replace('@','_');
      Actions.reset('team', {id: email});
      //this.setState({user: user});
    })
    .catch((err) => {
      console.log('WRONG SIGNIN', err);
    })
    .done();
  }

  componentWillMount() {
    GoogleSignin.configure({
        webClientId: '917668116026-86a58kb241a8ec1rms9j2uhgocemd6ih.apps.googleusercontent.com',
        iosClientId: '917668116026-jdk446foo07g91njcnm90nst78v677cf.apps.googleusercontent.com',
        hostedDomain: 'bbva.com'
    });
    setTimeout(
      function() {
        GoogleSignin.currentUserAsync().then((user) => {
          if(user!=null){
            var email= user.email;
            email=email.replace(/\./g,'_');
            email=email.replace('@','_');
            Actions.reset('team', {id: email});
          }else{
            this.setState({login: true});
          }
        }).done();
      }.bind(this), 2000);
  }

  render() {
    let button = null;
    if (this.state.login) {
      button = 
          <Button iconLeft block danger onPress={this.onPressLogin}>
            <Icon name='logo-googleplus' />
            <Text>Login</Text>
          </Button>;
    }else {
      button = <Spinner />;
    } 
    return (
      <Container>
        <View style={styles.main}>
          <View style={styles.box}>
            <H1>Yuntapp</H1>
            {button}
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
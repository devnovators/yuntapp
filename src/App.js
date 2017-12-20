import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';
import { StyleProvider } from 'native-base';
import getTheme from './theme/components';
import yunta from './theme/variables/yunta';
import LoginScene from './scenes/LoginScene';
import TeamScene from './scenes/TeamScene';
import AppreciationScene from './scenes/AppreciationScene';

export default class App extends Component {

  
  render() {
    return (
      <StyleProvider style={getTheme(yunta)}>
      <Router hideNavBar= "true">
        <Scene key="root">
          <Scene key="login" component={LoginScene} hideNavBar={true} initial={true}/>
          <Scene key="team" component={TeamScene} hideNavBar={true}/>
          <Scene key="appreciation" component={AppreciationScene} hideNavBar={true}/>
        </Scene>
      </Router>
      </StyleProvider>
    );
  }
}
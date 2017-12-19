import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Actions } from 'react-native-router-flux';
import { Footer, FooterTab, Button, Text } from 'native-base';

class FooterAppreciation extends Component {
  constructor(props){
    super(props)
  }

  render() {
    return (
      <Footer>
        <FooterTab>
          <Button>
            <Text>Role Before</Text>
          </Button>
          <Button>
            <Text>Role After</Text>
          </Button>
        </FooterTab>
      </Footer>
    );
  }
}

export default FooterAppreciation
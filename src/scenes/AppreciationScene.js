import React, { Component } from 'react';
import { Container, Tab, Tabs } from 'native-base';
import HeaderYuntapp from '../components/HeaderYuntapp';
import FooterAppreciation from '../components/FooterAppreciation';
import TabCategory from '../components/TabCategory';

export default class AppreciationScene extends Component {
  render() {
    return (
      <Container>
        <HeaderYuntapp />
        <Tabs initialPage={0}>
          <Tab heading="Categoria 1" style={{backgroundColor: 'transparent'}}>
            <TabCategory />
          </Tab>
          <Tab heading="Categoria 2" style={{backgroundColor: 'transparent'}}>
            <TabCategory />
          </Tab>
          <Tab heading="Categoria 3" style={{backgroundColor: 'transparent'}}>
            <TabCategory />
          </Tab>
        </Tabs>
        <FooterAppreciation />
      </Container>
    );
  }
}

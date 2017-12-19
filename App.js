import React from 'react';
import { StyleSheet, Platform, Image, Text, View, TextInput, Button } from 'react-native';

import firebase from 'react-native-firebase';

class Listado extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <View>
        {
          this.props.lista.map(item => (
            <Text key={item.key} >{item.nombre} {item.edad}</Text>
            ))
        }
      </View>
    );
  }
}

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      nombre: 'hola',
      edad: '',
      lista: []
    };
    this.agregar = this.agregar.bind(this);
  }

  componentDidMount() {
    //firebase.database().ref('prueba').once('value').then((snapshot)=>{
    firebase.database().ref('prueba').on('value', (snapshot)=>{
      var items=[];
      snapshot.forEach(function(itemSnap) {
        var item = itemSnap.val();
        item.key = itemSnap.key;
        items.push(item);
      });
      this.setState({
        lista: items
      });
    });
  }

  agregar(){
    firebase.database().ref('prueba/').push().set({
      nombre: this.state.nombre,
      edad: this.state.edad
    });
  }

  render() {
    return (
      <View>
        <TextInput onChangeText={(text) => this.setState({nombre: text}) } 
        placeholder='Nombre' />
        <TextInput onChangeText={(edad) => this.setState({edad}) } 
        placeholder='Edad' />
        <Button onPress={this.agregar} title='Agregar'/>
        <Text>{this.state.nombre}</Text>
        <Text>{this.state.edad}</Text>
        <Listado lista={this.state.lista} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  
});

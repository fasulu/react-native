import React from 'react';
import TextsComponent from './src/components/TestsComponent';
import ImagesComponent from './src/components/ImagesComponent';

import { Text, StyleSheet, ScrollView, ActivityIndicator, Pressable, Alert } from 'react-native';

export default class App extends React.Component {
    constructor() {
      super();
      this.state = {
        showLoading: false
      }
    }

    onPress = () => {
      this.setState({
        showLoading: !this.state.showLoading
      })
      Alert.alert("Boutton pressé", "Vous avez appuyé sur le boutton")
    }

    render() {
      return (
        <ScrollView style={styles.container}>
          <TextsComponent/>
          <ImagesComponent/>
          { this.state.showLoading ? 
            <ActivityIndicator size="large"/>
            : null
          }
          <Pressable 
            onPress={this.onPress}
            style={styles.btn}
          >
            <Text style={{fontWeight: 'bold', fontSize: 15, textAlign: 'center'}}>Appuieee !</Text>
          </Pressable>
          
        </ScrollView>
      ) 
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "blue",
    flex: 1,
    height:150,
  },
  btn: {
    backgroundColor: 'grey',
    borderRadius: 0.5,
    height:25
  }
})
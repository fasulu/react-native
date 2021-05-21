import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class TextsComponent extends React.Component {
  render() {
    return (
      <View style={styles.textContainer}>
        <Text style={styles.textBig}>text 1</Text>
        <Text style={styles.textCentered}>text 2</Text>
        <Text style={styles.textBold}>text 3</Text>
      </View>
    )
  }
}

const textStyle = {
  marginTop: 80,
  marginBottom: 80
}

const styles = StyleSheet.create({
  textContainer: {
    backgroundColor: "white",
  },
  textBig : {
    ...textStyle,
    fontSize: 30
  },
  textCentered: {
    ...textStyle,
    textAlign: "center"
  },
  textBold: {
    ...textStyle,
    fontWeight: 'bold'
  }
})
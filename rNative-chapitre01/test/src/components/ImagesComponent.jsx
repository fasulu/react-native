import React from 'react';
import { Image, View, StyleSheet } from 'react-native';

export default class Title extends React.Component {
  render() {
    return (
      <View>
        <Image
          source={imgUrl}
          style={styles.serverImgSize}
        ></Image>
        <Image
          source={require('../../images/android_robot.png')}
          style={styles.localImgSize}
        ></Image>
      </View>
    )
  }
}
const imgUrl = "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png"

const styles = StyleSheet.create({
  localImgSize: { 
    width: 100,
    height: 125, 
    alignSelf:'center'
  },
  serverImgSize: { 
    width: 350,
    height: 100, 
    alignSelf:'center'
  }
})
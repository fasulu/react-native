import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Button, Alert, ActivityIndicator, Pressable } from 'react-native';
// import { styles } from './App.styles';
import Title from './src/components/Title';

export default function App() {

  const [showLoading, setShowLoading] = useState(false);

  function pressableOnClick() {
    console.log("Im pressed");
    alert("Alert", 'Button pressed');
  }
  function onPressable() {
    console.log("Im pressed");
    alert("Alert", 'Button pressed');
  }
  function onPressCall() {
    console.log("ActivityIndicator pressed");

    setShowLoading(true)
  }

  return (

    <ScrollView >
      <View style={styles.container}>

        <View style={styles.textcontainer}>

          <Text style={styles.container1}>Start working on your app!</Text>

          <Text style={styles.container2}>Hi this is my first android App</Text>

          <Text style={styles.container3}>Text 3</Text>

        </View>

        <Image source={require("./images/android_robot.png")}
          style={styles.imagecontainer1} />

        <Image source={require("./images/pinquiy.png")}
          style={styles.imagecontainer1} />

        <Pressable
          style={styles.pressable}
          onPress={pressableOnClick}>
          <Text>Press me</Text>
        </Pressable>

        <Button title="Press me"
          style={{ marginBottom: "50px", backgroundColor: "red" }}
          onPress={onPressable}
        >
        </Button>

        <Title >   </Title>

        {/* <ActivityIndicator style={{ marginTop: 10 }} size='large' /> */}
        <Button
          title="Activity Indicator"
          style={{ marginTop: 10 }}
          onPress={onPressCall}>
          {/* <Text>Activity Indicator</Text> */}

        </Button>

        <ActivityIndicator
          style={{ marginTop: 10 }}
          size='large'
          animating={showLoading}>
        </ActivityIndicator>

      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container1: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 80,
    fontSize: '30px',
    fontWeight: 'bold',
  },
  textcontainer1: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 80,
    marginBottom: 80,
    fontSize: '30px',
    fontWeight: 'bold',
  },
  imagecontainer1: {
    flex: 1,
    borderColor:"orange",
    width: 100, 
    height: 120, 
    marginBottom: "10px", 
    marginTop: "10px"
},
});

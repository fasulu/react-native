import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { styles } from './App.styles'
function App() {

  const regex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$")
  const password = "fasulu"
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');

  const emailValid = regex.test(email)

  function signIn() {

    // console.log("email before sign in check", email)
    // console.log("pwd before sign in check", pwd)

    // console.log("email format is", regex.test(email))

    if ((regex.test(email) === true) && (pwd === password)) {
      // console.log("email and password are correct", email, pwd)
      alert("Signed In successfully")
      // console.log("email after sign in check", email)
      // console.log("pwd after sign in check", pwd)
    } else {
      alert("email or password is wrong")
      // console.log("email or password is wrong")
    }
  }

  function checkEmail(value) {
    console.log("email input box value", value)
    setEmail(value)

    if (regex.test(value) === true) {
      console.log("email format is correct and saved in email", email)

    } else {
      console.log("wrong email format")
    }
  }

  function checkPwd(value) {
    console.log("pwd input box value", value)
    setPwd(value)

    if (value.length <= 5) {
      console.log("password length must be greater than 5 characters")
    }

    if (password === value) {
      console.log("password is correct and saved in pwd", pwd)
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.containerTop} >
        <Image style={{ marginTop: 20, width: '25%', height: '25%', alignSelf: 'center' }}
        source={require('./images/konexio_logo.png')} />
        <Text style={styles.headText}>
          Login Form</Text>
      </View>

      <View style={styles.containerMid} >
        <TextInput
          style={styles.textInput1}
          placeholder="Email"
          onChange={(e) => checkEmail(e.target.value)}
        // onChange = {(e) => checkEmail()}
        />
        <TextInput
          style={styles.textInput2}
          placeholder="Password"
          onChange={(e) => checkPwd(e.target.value)}
        />
        <TouchableOpacity
          style={styles.signInBtn}
          onPress={signIn}>

          {/* onPress = {() => { emailValid == true ? alert("bonne pwd") : console.log("false")  } } */}

          <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18 }}> SignIn
        </Text>
        </TouchableOpacity>
      </View>

      <View style={styles.containerBtm} >
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

//*********** */

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "space-between",
//     backgroundColor: "#ffd",
//     padding: 20,
//     margin: 5,
//   },
//   containerTop: {
//     flex: 0.3,
//     backgroundColor: "lightgrey",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,

//   },
//   containerMid: {
//     flex: 0.3,
//     alignItems: 'center',

//   },
//   containerBtm: {
//     flex: 0.3,
//     backgroundColor: "lightgray",
//     alignItems: 'center',
//     marginBottom: '20',
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//   },
//   headText: {
//     flex: 1,
//     color: "black",
//     marginTop: 30,
//     marginBottom: 10,
//     fontSize: 20,
//     fontWeight: 'bold',
//     textAlign: 'center',
//   },
//   textInput1: {
//     width: "25%",
//     minWidth: "33%",
//     height: 'auto',
//     borderColor: 'gray',
//     fontSize:18,
//     borderWidth: 1,
//     textAlign: 'center',
//     borderRadius: 5,
//     margin: 10,
//   },
//   textInput2: {
//     width: "25%",
//     minWidth: "33%",
//     height: 'auto',
//     fontSize:18,
//     borderColor: 'gray',
//     borderWidth: 1,
//     textAlign: 'center',
//     borderRadius: 5,
//     margin: 10,
//   },
//   signInBtn: {
//     width: 150,
//     height: 35,
//     margin: 20,
//     backgroundColor: 'blue',
//     borderRadius: 10,
//     justifyContent: 'center',
//     alignItems: 'center'
//   }
// });

export default App;
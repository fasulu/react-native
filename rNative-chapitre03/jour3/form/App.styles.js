import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#ffd",
      padding: 20,
      margin: 5,
    },
    containerTop: {
      flex: 0.3,
      backgroundColor: "lightgrey",
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
  
    },
    containerMid: {
      flex: 0.3,
      alignItems: 'center',
  
    },
    containerBtm: {
      flex: 0.3,
      backgroundColor: "lightgray",
      alignItems: 'center',
      marginBottom: '20',
      borderBottomLeftRadius: 20,
      borderBottomRightRadius: 20,
    },
    headText: {
      flex: 1,
      color: "black",
      marginTop: 30,
      marginBottom: 10,
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
    },
    textInput1: {
      width: "25%",
      minWidth: "33%",
      height: 'auto',
      borderColor: 'gray',
      fontSize:18,
      borderWidth: 1,
      textAlign: 'center',
      borderRadius: 5,
      margin: 10,
    },
    textInput2: {
      width: "25%",
      minWidth: "33%",
      height: 'auto',
      fontSize:18,
      borderColor: 'gray',
      borderWidth: 1,
      textAlign: 'center',
      borderRadius: 5,
      margin: 10,
    },
    signInBtn: {
      width: 150,
      height: 35,
      margin: 20,
      backgroundColor: 'blue',
      borderRadius: 10,
      justifyContent: 'center',
      alignItems: 'center'
    }
  });
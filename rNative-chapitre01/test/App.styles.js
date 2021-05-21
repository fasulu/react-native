import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create( {
    container: {
        flex: 1,
        backgroundColor: 'blue',
        alignItems: 'center',
        justifyContent: 'center',
      },
      textcontainer: {
        flex: 1,
        backgroundColor: 'white',
      },
      container1: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 80,
        marginBottom: 80,
        fontSize: '30px',
        fontWeight: 'bold'
      },
      imagecontainer1: {
          flex: 1,
          borderColor:"orange",
          width: 100, 
          height: 120, 
          marginBottom: "10px", 
          marginTop: "10px"
      },
      componenttitle: {
        fontSize: '30px',
        fontWeight: 'bold',
        color: 'orange'
      },
      pressable: {
        marginBottom: "50px", 
        backgroundColor: "green",
        TextStylefontSize: "25px",
        fontWeight: 'bold'
      }
})
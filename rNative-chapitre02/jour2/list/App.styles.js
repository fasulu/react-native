import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    containerParent: {
        flex: 1,
        justifyContent: "space-between",
        backgroundColor: "white",
        padding: 2,
        margin: 2,
    
      },
      containerTop: {
        flex: 1,
        backgroundColor: "blue",
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 1,
      },
      containerMid: {
        flex: 0.3,
        alignItems: 'center',
        marginTop:10,
        marginBottom: 10
    
      },
      containerCountry: {
        flex: 1,
        fontSize: 15,
        fontWeight: "bold",
        marginTop: 10,
      },
      containerCapital: {
        flex: 1,
        fontSize: 15,
        fontWeight: "light",
        marginTop: 10,
        marginBottom:10,
        color: 'white',
      },
      containerImage: {
        width: '97%',
        height: 250,
      },
})
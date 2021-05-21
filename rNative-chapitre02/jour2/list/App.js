import React, { Component } from "react";
import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import  { styles } from './App.styles'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []

    };
    this.renderItem = this.renderItem.bind(this);

  }

  componentDidMount = async () => {
    let response = await fetch(
      'http://restcountries.eu/rest/v2/all'
    );
    let json = await response.json();
    // console.log(json);
    this.setState({
      data: json
    })
    // console.log(this.state.data)
  }

  renderItem({ item }) {
    return (
      <View style={styles.containerParent}>

      <View style={styles.containerTop}>
        <View >
          <Text ></Text>

        </View>
        <View style={styles.containerMid}>
          <Text style={styles.containerCountry}>{item.name}</Text>
          <Text style={styles.containerCapital}>{item.capital}</Text>
          <Image style={styles.containerImage}
            source={{ uri: item.flag }} />

        </View>
        <View style={styles.containerBtm}>
          
        </View>

      </View>

      </View>
    );
  }

  render() {
    return (
      <View>
        <FlatList
          data={this.state.data}
          renderItem={this.renderItem}
          keyExtractor={(item) => item.toString()}

        />
      </View>
    )
  }
}

// const styles = StyleSheet.create({
//   containerParent: {
//     flex: 1,
//     justifyContent: "space-between",
//     backgroundColor: "white",
//     padding: 2,
//     margin: 2,

//   },
//   containerTop: {
//     flex: 1,
//     backgroundColor: "blue",
//     borderTopLeftRadius: 20,
//     borderTopRightRadius: 20,
//     borderBottomLeftRadius: 20,
//     borderBottomRightRadius: 20,
//     marginBottom: 1,
//   },
//   containerMid: {
//     flex: 0.3,
//     alignItems: 'center',
//     marginTop:10,
//     marginBottom: 10

//   },
//   containerCountry: {
//     flex: 1,
//     fontSize: 15,
//     fontWeight: "bold",
//     marginTop: 10,
//   },
//   containerCapital: {
//     flex: 1,
//     fontSize: 15,
//     fontWeight: "light",
//     marginTop: 10,
//     marginBottom:10,
//     color: 'white',
//   },
//   containerImage: {
//     width: '97%',
//     height: 250,
//   },
// })

export default App;
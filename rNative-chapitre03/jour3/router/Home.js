import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, TextInput } from 'react-native';

class Home extends React.Component {
    constructor() {
        super();
        this.state = {
            number: 0
        }
    }

    // onChangeNumber = (value) => {
    // onChangeNumber(value) {
    //     console.log("number typed is", value)
    //     this.setState({ number })
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text>Home</Text>
{/* 
                <TextInput
                    onChangeText={onChangeNumber()}
                    value={number}
                    keyboardType="numeric"
                /> */}

                <TouchableOpacity onPress={() => this.props.history.push('/about', { name: 'Jane' })}>
                    <Text>Click me</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default Home;
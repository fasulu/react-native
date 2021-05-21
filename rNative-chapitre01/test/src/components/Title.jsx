import React from 'react';
import { Text } from 'react-native'
import { styles } from '../../App.styles';

export default class Title extends React.Component {

    render() {
        return <Text style={ styles.componenttitle}> Im Component Title {this.props.children}</Text>
    }
}
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';

export default class HomeScreen extends Component{
    render(){
        return (
            <View style = {styles.container}>
            <Text> Proximamente... </Text>
            </View>
        );
    }

}

const styles = StyleSheet.create({
    container: {
  
      flex: 1,
      backgroundColor: '#3498db',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

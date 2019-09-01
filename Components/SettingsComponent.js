import React, { Component } from 'react';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
//import { DetailScreen, ThirdScreen } from '../screenNames';

const backgroundColor = '#e97600';
export default class SettingsComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = 'Settings';
    let tabBarIcon = () => (
      <Image
      source={require('../icons/setting_ico.png')}
      style={{width:26, height:26, tintColor: backgroundColor}}
      />
    );
    return{ tabBarLabel, tabBarIcon };
  }
  render() {
    return (
      <View
      style={{
        flex:1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      >
      <Text style={{fontWeight: 'bold', fontSize: 12, color: 'white'}}>
      This is Settings Screen.
      </Text>
      </View>
    );
  }
}

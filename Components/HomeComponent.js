import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import Button from 'react-native-button';
import { Info } from '../screenNames';

const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params = {} } = navigation.state;
    let tabBarLabel = 'Home';
    let tabBarIcon = () => (
      <Image
      source={require('../icons/home_ico.png')}
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
      This is Home Screen.
      </Text>
      <Button
      style={{fontSize: 18, color: 'white', padding: 10, margin: 20, width: 250, height: 45, borderRadius: 10, backgroundColor: 'darkviolet'}}
      onPress = {() => {
        const { navigate } = this.props.navigation;
        navigate(Info);
      }}>
      Navigate To Detail Screen
      </Button>
      </View>
    );
  }
}

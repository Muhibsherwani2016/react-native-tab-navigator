import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';
import { createBottomTabNavigator, createAppContainer } from 'react-navigation';

//Components
import HomeComponent from './Components/HomeComponent';
import InfoComponent from './Components/InfoComponent';
import SettingsComponent from './Components/SettingsComponent';
import CloudComponent from './Components/CloudComponent';

//Screen Names
import { Home, Info, Settings, Cloud } from './screenNames';

let routeconfigs = {
  Home: {
    screen: HomeComponent,
  },
 Info: {
   screen: InfoComponent,
 },
 Settings: {
   screen: SettingsComponent,
 },
 Cloud: {
   screen: CloudComponent,
 },
};

let tabNavigatorConfig = {
  tabBarPosition: 'bottom',
  // animationEnabled: true,
  // swipeEnabled: true,
  tabBarOptions: {
    activeTintColor: 'blue',
    labelStyle: {
      fontSize: 13,
    },
    style: {
      backgroundColor: 'lightgray',
      padding: -10,
    },
    //showLabel: false
  },
};

const Tab = createBottomTabNavigator(routeconfigs, tabNavigatorConfig);
const App = createAppContainer(Tab);
export default App;

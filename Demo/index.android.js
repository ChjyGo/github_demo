/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator
} from 'react-native';

import FirstPageComponent from './src/component/FirstPageComponent';
class Demo extends Component {
    render() {
        return (

            <Navigator
                initialRoute = {{name:'first',component:FirstPageComponent}}
                configureScene = {(route)=>{
           return Navigator.SceneConfigs.PushFromRight;
    }}
                renderScene = {(route, navigator)=>{
            let Component = route.component;
            return <Component {...route.params} navigator={navigator}/>
         }}
            />
        );
    }
}

AppRegistry.registerComponent('Demo', () => Demo);

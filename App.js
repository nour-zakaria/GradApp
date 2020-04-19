import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import AppNavigator from './AppNavigator';

import Login from './Screens/Login';


export default class App extends React.Component {
 constructor(props){
    super(props);
    this.state = {
        timePassed: false,
    };
}

componentDidMount() {
    setTimeout( () => {
        this.setTimePassed();
    },1000);
}

setTimePassed() {
    this.setState({timePassed: true});
}

render() {
 
        return <AppNavigator/>;
    
}
}

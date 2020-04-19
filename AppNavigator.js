import React, { Component } from 'react';
import First from './Screens/First';
import Signup from './Screens/Signup';
import Login from './Screens/Login';

import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const AppNavigator = createStackNavigator(
{
First: {
screen: First,
  navigationOptions: {
    headerShown: false
    }
},
Signup: {
screen: Signup,
navigationOptions: {
   headerShown: false
    }
},
Login: {
screen: Login,
navigationOptions: {
      headerShown: false
    }
},



},
{
initialRouteName: 'First',
}


);
export default createAppContainer(AppNavigator);








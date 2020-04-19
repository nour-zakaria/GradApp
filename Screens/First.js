import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  StatusBar,
  TouchableOpacity
} from "react-native";
import { Image as ReactImage } from "react-native";


export default class First extends React.Component  {
 constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.container}>
      <StatusBar  
                    backgroundColor = "#CC5775"  
                    barStyle = "dark-content"   
                    hidden = {true}    
                  
                />  

        <ReactImage
          source={require("../Image/BACK.png")}
          style={styles.backgroundImage}
        />

           <ReactImage
          source={require("../Image/LOGO.png")}
          style={styles.LOGO}
        />


        <TouchableOpacity style={styles.button1}  
           onPress={() =>
          this.props. navigation.navigate('Signup')
          }>
          <Text style={styles.text}>انشاء حساب</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button2}
          onPress={() =>
           this.props.  navigation.navigate('Login')
          }>
          <Text style={styles.text} >تسجيل دخول</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() =>
            this.props.navigation.navigate('Cong') }
          style={styles.button3}
          >
          <Text style={styles.textend}  >الدخول كمزود خدمة  </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backgroundImage: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 360,
    height: 640,
    left: 0,
    top: 0
  },
  LOGO: {
    opacity: 1,
    position: "absolute",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    width: 129,
    height: 137,
    left: 120,
    top:100
  },
  button1: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(218, 165, 32, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 14,
    paddingRight: 120,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    // fontSize: 14,
    // fontWeight: "400",
    // fontStyle: "normal",
    // fontFamily: "Cairo",
    shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.2901960784313726,
    shadowOffset: {
      width: 30,
      height: 30
    },
    shadowRadius: 60,
    width: 277,
    height: 49,
    left: 40,
    top: 285
  },
   text: {
     opacity: 1,
    position: "absolute",
      width: 277,
    height: 49,
    color: "rgba(255, 255, 255, 1)",
    fontSize: 14,
    fontWeight: '100',
    fontStyle: 'normal',
     fontFamily: 'Cairo-SemiBold',
    textAlign: 'center',
    paddingTop: 10,
    paddingLeft: 20
  },
  button2: {
    opacity: 1,
    position: "absolute",
   backgroundColor: "rgba(218, 165, 32, 1)",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 14,
    paddingRight: 120,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
      shadowColor: "rgb(0,  0,  0)",
    shadowOpacity: 0.2901960784313726,
    shadowOffset: {
      width: 30,
      height: 30
    },
    shadowRadius: 60,
    width: 277,
    height: 49,
    left: 40,
    top: 355,
    
  
  },
  button3: {
    opacity: 1,
    position: "absolute",
    backgroundColor: "rgba(255, 255, 255, 0)",
  
    textAlign: "center",
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 130,
    height: 19,
    left: 120,
    top: 430,
  },
    textend: {
     opacity: 1,
    position: "absolute",
    color: "rgba(192, 145, 45, 1)",
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Cairo-Regular',
    textAlign: 'center',
    }
});

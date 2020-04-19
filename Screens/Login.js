import React, { Component } from 'react';
import {StyleSheet, View, Image,Text,AsyncStorage,Keyboard ,TouchableOpacity,TextInput,StatusBar} from 'react-native';
import {Image as ReactImage} from 'react-native';
// import DeviceStorge from '../Services/DeviceStorge';
// import axios from 'axios';
// const ACCESS_TOKEN = "token";
// import DeviceInfo from 'react-native-device-info';
// import { getUniqueId, getManufacturer } from 'react-native-device-info';
export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      MultiInput : '',
      password : ''  ,
       errors: {} 
    };
     // this.LoginUser = this.LoginUser.bind(this);
  
    
  }
     validateForm = () => {
        let isValid = true;
        let {phone, password} = this.state;
        let errors = {};

        if (!phone) {
            isValid = false;
            errors["phone"] = 'لم تدخل بريدك الإلكتروني بعد'
        }

        if (!password) {
            isValid = false;
            errors["password"] = "لم تدخل كلمة مرور بعد";
        }

        this.setState({errors: errors});
        return isValid;
    };
//   async LoginUser() {
//     try {
//        let device_name = await DeviceInfo.getDeviceName();
//  let { MultiInput ,password} = this.state;
// let user = {password, device_name}

//   if(MultiInput.includes("@")) { user.email= MultiInput}
//       else {user.phone= MultiInput }

     
//   const Response = await  axios.post('https://karaz6.herokuapp.com/api/user/login' , user ) 
//     await DeviceStorge.setItem(ACCESS_TOKEN,Response.data.token);
//      const AuthStr = 'Bearer '.concat(await DeviceStorge.getItem(ACCESS_TOKEN)); 
//      console.log(AuthStr + "llllooogin")
//     const response = await  axios.get('https://karaz6.herokuapp.com/api/user/profile',{ headers: { Authorization: AuthStr } }) 
//       if(response.status === 200) {
//                this.props.navigation.navigate('Cong');}
//     else if(response.status === 201) { 
//        const response2 = await  axios.get('https://karaz6.herokuapp.com/api/verifyAccount/MobileSend',{ headers: { Authorization: AuthStr } }) 
//                     var obj = JSON.parse(Response.config.data)
//                    if("email" in obj){ this.props.navigation.navigate('AccountEmail'); }
//                      else {  this.props.navigation.navigate('AccountPhone');}  }                           
//       }catch(error) {
//         this.setState({error: error});
//         console.log("error " + error);
//     }
 
//   }
 
  
  
   

  render() {
    return (
      <View style={styles.container}>
 <StatusBar  
    backgroundColor =  "rgba(218, 165, 32, 1)"
     barStyle = "dark-content"   
      hidden = {false}        
                /> 
      <Text style={styles.tooltext}>
            تسجيل دخول
          </Text>
           <TouchableOpacity 
            style={styles.backbutton}
                onPress={() => this.props.navigation.navigate('Home')}
            >
           <ReactImage
        source={require("../Image/surface1.png")}
        resizeMode="contain"
       style = {styles.image}
        />
        </TouchableOpacity>
   <View>
          <TextInput
            style={styles.input1}
            //  placeholderTextColor = "#002f6c"
            //     selectionColor="#fff"
            //     keyboardType="email-address"
          
             onSubmitEditing={()=> this.password.focus()}
              onChangeText={(value) => this.setState({MultiInput: value})}
        value={this.state.MultiInput}
            placeholder="رقم الهاتف او البريد الاكتروني"
          />
              <Text style={styles.errorStyle1}>{this.state.errors["phone"]}</Text> 
        </View>
        <View>
          <TextInput
            style={styles.input2}
            onChangeText={password => this.setState({ password })}
             secureTextEntry={true}
               ref={(input) => this.password = input}
            placeholder="كلمة المرور "
          />
               <Text style={styles.errorStyle2}>{this.state.errors["password"]} </Text>
            <TouchableOpacity   style={styles.button3}
         onPress={() =>  this.props.navigation.navigate('ForgetPass')}
          >
          <Text style={styles.textforget}>نسيت كلمة المرور ؟ </Text>
        </TouchableOpacity>
        </View>

      

        <TouchableOpacity 
          style={styles.button1}
          onPress={() => this.LoginUser()}
          // onPress={() => this.changeColor()}
          >
          <Text style={styles.text}>تسجيل الدخول</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.text3}>ليس لديك حساب؟</Text>
          <TouchableOpacity style={styles.button4} 
              onPress={() =>
            this.props.navigation.navigate('Signup')} >    
       
            <Text style={styles.text4} > انشأ حساب الان </Text>
          </TouchableOpacity>
       
        </View>

      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
     backgroundColor: "#FFFFFF"
  },
 
  image: {
   
    width : 8.36 ,
    height : 14.23 ,
    top:10,
    right:2.78

  },
 
 
  input1: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    fontFamily : 'Cairo-Regular',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 212, 212, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(212, 212, 212, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 212, 212, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(212, 212, 212, 1)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 328,
    height: 48,
    left: 15,
    top: 100,
    textAlign: 'right',
  },
  input2: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    fontFamily : 'Cairo-Regular',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 20,
    paddingBottom: 0,
    paddingLeft: 0,
    borderTopWidth: 1,
    borderTopColor: 'rgba(212, 212, 212, 1)',
    borderRightWidth: 1,
    borderRightColor: 'rgba(212, 212, 212, 1)',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(212, 212, 212, 1)',
    borderLeftWidth: 1,
    borderLeftColor: 'rgba(212, 212, 212, 1)',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    width: 328,
    height: 48,
    left: 15,
    top: 160,
    textAlign: 'right',
  },
 
  button3: {
    opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,                                                                         
    paddingBottom: 0,
    paddingLeft: 0,
    width: 190,
    height: 26,
    right: 190,
    top: 210,
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
    top: 350
  },
  text3: {
 opacity: 1,
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 0)',
    color: 'rgba(88, 82, 88, 1)',
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily : 'Cairo-SemiBold',
    textAlign: 'center',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 130,
    height: 26,
    right: 70,
    top:380
   // bottom:-130
  },
  button4: {
   opacity: 1,
    position: 'absolute',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 100,
    height: 26,
    right: 185,
    top: 380,
  },
  text4: {
  fontSize: 14,
  fontWeight: '400',
  fontFamily: 'Cairo-SemiBold',
  color: "rgba(192, 145, 45, 1)",
  fontStyle: 'normal',
  
  },
 
   tooltext: {
    opacity: 1,
    position: 'absolute',
   color: '#000000',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 300,
    height: 30,
    right: 50,
 top: 20,
    fontSize: 20,
    fontWeight: '400',
    fontStyle: 'normal',
    fontFamily: 'Cairo-SemiBold',
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
  
   backbutton:{
     opacity: 1,
    position: 'absolute',
   color: '#000000',
    marginTop: 0,
    marginRight: 0,
    marginBottom: 0,
    marginLeft: 0,
    paddingTop: 0,
    paddingRight: 0,
    paddingBottom: 0,
    paddingLeft: 0,
    width: 14.63,
    height: 24.92,
    right: 10,
    top: 20, 
  },
  textforget:{
     color: "rgba(192, 145, 45, 1)",
    fontSize: 14,
    fontWeight: '400',
    fontStyle: 'normal',
 fontFamily : 'Cairo-Regular',
    textAlign: 'center',
  },
  errorStyle1:{
    color:'red',
    top:45,
    right:25
  },
   errorStyle2:{
    color:'red',
   top:115,
    right:25
  }
});
import React, {useState, useEffect} from "react";
import {View, StyleSheet, Image, TouchableOpacity, } from 'react-native';
import Torch from "react-native-torch";
import RNShake from 'react-native-shake';


const App = () => {
  const [toggle, setToggle] = useState(false);
  
  const handleChangeToggle = ()=>{
    setToggle(oldToggle => !oldToggle);
  }

  useEffect(()=>{
    //liga a lanterna
    Torch.switchState(toggle);
    }, [toggle]);

    //liga a lanterna balançando o celular
    useEffect(()=>{
      const subscription = RNShake.addListener(()=>{
        setToggle(oldToggle => !oldToggle);
      });
      return ()=> subscription.remove();
    },[]);
  return <View style={toggle ? style.containerLigth : style.container}>
    <TouchableOpacity 
    onPress={handleChangeToggle}>
      
    <Image 
    style={toggle ? style.lightingOn :style.lightingoff} 
    source={
      toggle
      ? require('./assets/icons/eco-light.png')
      : require('./assets/icons/eco-light-off.png')
    }/>
     <Image 
    style={style.dioLogo} 
    source={
      toggle
      ? require('./assets/icons/logo-dio.png')
      : require('./assets/icons/logo-dio-white.png')
    }/>
    </TouchableOpacity>
  </View>;
};


export default App;

const style = StyleSheet.create({
  container:{
  flex: 1,
  backgroundColor: 'black',
  alignItems: 'center',
  justifyContent: 'center',
  },

  containerLigth: {
    flex: 1, 
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    },
    lightingOn:{
      resizeMode: 'contain',
      alignSelf: 'center',
      width: 150,
      height: 150,
    },
    lightingoff:{
      resizeMode: 'contain',
      alignSelf: 'center',
      tintColor: 'white',
      width: 150,
      height: 150,
    },
    dioLogo:{
      resizeMode: 'contain',
      alignSelf: 'center',
      width: 250,
      height: 250,
    },
});

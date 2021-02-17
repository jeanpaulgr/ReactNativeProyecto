import React, {useState, useContext, useEffect} from 'react';
import { LoginContext } from '../../context/LoginContext';
import { Alert, Button, TextInput, View, StyleSheet, Text } from 'react-native';

import AsyncStorage from '@react-native-community/async-storage'
import {saveUsuario, getUsuario, deleteUsuario} from '../../clases/UsuarioAsyncStorage'
import {loginStyles} from '../../styles/styles'
import color from '../../styles/colors'

const SignIn = () => {
    const [email, SetEmail] = useState('');
    const [intento, SetIntento] = useState(false);
    const [password, SetPassword] = useState('');
    const { getLogin, loginUser, SetLoginUser, responseMessage} =  useContext(LoginContext);
  
    useEffect(() => {
        const currentUser =  getUsuario()
        console.log('localUser: ', currentUser)
        console.log('loginUser Logincontext: ', loginUser)
        console.log('status: ', responseMessage)

        if(currentUser){
            SetLoginUser(currentUser);
        }
        
        if(loginUser){
            SetLoginUser(loginUser);
        }
    }, [intento])

    const onClick_SignOut = () => {
        deleteUsuario();
        SetLoginUser('');

    }
    const onLogin = () =>  {   
        getLogin(email, password);
        SetEmail('')
        SetPassword('')
        SetIntento(!intento)
      }
     
        return (
                       
        <View style={loginStyles.container}>
        {loginUser === '' ? (
        <View>
            <Text>INICIO DE SESIÓN</Text>
            
        <TextInput
          value={email}
          onChangeText={(email) => SetEmail(email)}
          placeholder={'Username'}
          style={loginStyles.txtInput}
        />
        <TextInput
          value={password}
          onChangeText={(password) => SetPassword(password)}
          placeholder={'Password'}
          secureTextEntry={true}
          style={loginStyles.txtInput}
        />
        
        <Button
          title={'Login'}
          style={loginStyles.btnMain}
          onPress={() => onLogin()}
        />
        </View>
        ) : (
            <View>
                <Text>Bienvenido</Text>
                <Button
          title={'Cerrar Sesión'}
          style={loginStyles.btntxt}
          onPress={() => onClick_SignOut()}
        />
            </View>
        )} 
      </View>

        )
    
}


export default SignIn;
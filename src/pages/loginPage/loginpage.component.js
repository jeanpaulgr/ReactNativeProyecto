import React, { useContext } from "react";
import { Button, Text, View } from 'react-native';
import SingIn from '../../components/sign-in/sign-in.component'
import { loginStyles } from "../../styles/styles";



const LoginPage = () => {
   
    return(

        <View>
             <SingIn/>
        </View>
            
    )
}


export default LoginPage;

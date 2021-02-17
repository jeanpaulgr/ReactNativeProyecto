import React, { createContext, useState, useEffect } from "react";
import {ApiPostLogin} from './../clases/constantes'
import {saveUsuario} from './../clases/UsuarioAsyncStorage' 
export const LoginContext = createContext();


const LoginProvider = ({children}) => {
    const [loginUser, SetLoginUser] = useState('');
    const [responseMessage, SetResponseMessage] = useState('');
    const [responseEstado, SetResponseEstado] = useState(0);
    // const [loginPass, SetLoginPass] = useState([]);
    
    // useEffect(() => getLogin(), []);
 
     const getLogin = (user, pass) => Loguearse(user, pass);   

     async function Loguearse(user, pass){
         
         const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ 
                UserName: user,
                Pass: pass 
            })
        };
        
        const response = await fetch(ApiPostLogin(), requestOptions);
        const data = await response.json(); 
         if(data){
            SetLoginUser(data[0].UserName);
            SetResponseMessage('Bienvenido');
            SetResponseEstado(200);
            saveUsuario(data[0].UserName)
            return 'bienvenido ' + data[0].UserName
        }else{
            SetResponseMessage('Error');
            SetResponseEstado(404);
            return 'Error';
        }
        

     }

      
      return (
        <LoginContext.Provider value={{ loginUser, getLogin, responseMessage, SetResponseMessage, responseEstado, SetResponseEstado, SetLoginUser}}>
            {children}
        </LoginContext.Provider>
      );
};


export default  LoginProvider;


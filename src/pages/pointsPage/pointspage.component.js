import React, {useEffect, useState, useContext} from 'react'
import Point from '../../components/point/point.component'
import {PointsContext} from '../../context/PointsContext'
import {LoginContext } from '../../context/LoginContext'
import { Button, Text, View } from 'react-native';
import AsyncStorage from '@react-native-community/async-storage'
import {saveUsuario, getUsuario, deleteUsuario} from '../../clases/UsuarioAsyncStorage'
import { pointsStyles } from "../../styles/styles";


 const PointsPage =() => {
    const { points, SetSearch, SetSearchTipo} = useContext(PointsContext);
    const { loginUser, SetLoginUser} = useContext(LoginContext);
        

    useEffect(() => {
        console.log('loginUser', loginUser);
        const currentUser =  getUsuario()
      
    }, [points, loginUser])
return(

    <View>
    <Text style={pointsStyles.tittle}>Points Screen</Text>
    <View style={pointsStyles.container}>
    {
                points.map(item => (
                       <Point key={item.PuntoID} myPoint={item}></Point>
                    ))
                
            }

    </View>
    </View>
)
}

export default PointsPage;

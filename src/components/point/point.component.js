import React from 'react'
import {savepunto, getpunto, deletepunto} from '../../clases/PointAsyncStorage'
import { Button, Text, View } from 'react-native';
import { pointStyles } from "../../styles/styles";
import { NavigationContainer } from '@react-navigation/native';


const Point = (props) => {
  const {PuntoID, Nombre, Localidad, Tipo ,Clasificacion, Region} = props.myPoint;
  const GoRooms = () =>{
      console.log('a Room Page');
      savepunto(PuntoID);
	//   window.location = '/rooms';
    navigation.navigate('Home')
  }
    return (
        <View style={pointStyles.pointItem}>
                 <Text>{Nombre}</Text>
                <Text>{Region} - {Localidad}</Text>
                <Text>Tipo: {Tipo}</Text> 
                <Text>Clasificación: {Clasificacion}</Text>
                <View style={pointStyles.buttonAlign}>
                    <Button 
                        style={pointStyles.buttonRoom} 
                        onClick={() => GoRooms()}
                        title='Ver Salas'>
                    </Button>
                </View>
        </View>
    );
    
}


export default Point;

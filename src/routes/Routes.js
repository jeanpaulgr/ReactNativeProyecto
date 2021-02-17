import * as React from 'react';
import { Button, SafeAreaView, View, Text, ScrollView} from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import LoginPage from '../pages/loginPage/loginpage.component'
import PointsPage from '../pages/pointsPage/pointspage.component'
import LoginContextProvider from '../context/LoginContext'
import PointsContextProvider from '../context/PointsContext'
import {safeAreaStyles} from '../styles/styles'

function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={safeAreaStyles.container}>
      <LoginContextProvider>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       <LoginPage/>
       </View>
       </LoginContextProvider>
    </SafeAreaView>
    
  );
}

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
       </View>
  );
}

function PerfilScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      {/* <Button
        onPress={() => navigation.navigate('Perfil')}
        title="Go to notifications"
      /> */}
    </View>
  );
}

function PointsScreen({ navigation }) {
  return (
    <SafeAreaView style={safeAreaStyles.container}>
    <LoginContextProvider>
    <PointsContextProvider>
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ScrollView>
      <PointsPage/>
     
      </ScrollView>
     </View>
     </PointsContextProvider>
  </LoginContextProvider>
  </SafeAreaView>
  );
}
  /* <Button
        onPress={() => navigation.navigate('Perfil')}
        title="Go to notifications"
      /> */
function FriendsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
 
    </View>
  );
}

function RoomsScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Rooms Screen</Text>
    </View>
  );
}

// function NotificationsScreen({ navigation }) {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Button onPress={() => navigation.goBack()} title="Go back home" />
//     </View>
//   );
// }

const Drawer = createDrawerNavigator();

export default function MyRoute() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Login">
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Perfil" component={PerfilScreen} />
        <Drawer.Screen name="Points" component={PointsScreen} />
        <Drawer.Screen name="Friends" component={FriendsScreen} />
        <Drawer.Screen name="Login" component={LoginScreen} />
        {/* <Drawer.Screen name="NotifiLcations" component={NotificationsScreen} /> */}
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
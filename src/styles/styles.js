import { StyleSheet } from 'react-native'
import color from './colors'

//Estilos para SplashScreen
const splashStyles = StyleSheet.create({
    image: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: color.WHITE,
    }
})

//Estilos para LoginScreen
const loginStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop:30
    },

    logo: {
        paddingTop: 50,
        alignItems: 'center',
    },

    btnMain: {
        width: 280,
        marginTop:40,
        marginBottom: 20,
        backgroundColor: color.ALMANAKE,
        borderRadius: 60
    },

    btnTransparent: {
        backgroundColor: 'rgba(52, 52, 52, 0)',
        borderColor: color.BLUE,
        width: 280,
        borderWidth: 2,
        marginBottom: 20,
        borderRadius: 60
    },

    btntxt: {
        textAlign: 'center',
        fontSize: 17,
        color: color.WHITE,
        paddingVertical: 15,
        fontFamily: 'Poppins-Bold',
    },

    txtTransparent: {
        color: color.LIGHTPRIMARYCOLOR,
        fontSize: 14,
        fontFamily: 'Poppins-Light',
    },
    
    txtInput:  {
        width: 200,
        height: 44,
        padding: 10,
        borderWidth: 1,
        borderColor: 'black',
        marginBottom: 10,
        backgroundColor: color.WHITE
      },
})

const safeAreaStyles = StyleSheet.create({

    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: color.CADETBLUE
    }

})

const pointsStyles = StyleSheet.create({

    container: {
        display: 'flex',
        alignItems: 'stretch',
        flexDirection: 'column',
        
    },
    tittle: {
        fontSize:30,
        textAlign: 'center',
        color: color.WHITE
    }

})

const pointStyles = StyleSheet.create({

    pointItem: {
        display: 'flex',
        margin: 1,
        padding: 1,
        color: color.WHITE,
        backgroundColor: color.WHITE,
        borderColor: color.WHITE,
        borderWidth: 30,
        // borderStyle: 'groove',
        borderRadius: 15,
        flexDirection: 'column',
        alignItems: 'stretch'
        // minWidth: 30,
        // background: color.VERDOSO
        
    },
    buttonAlign: {
        textAlign: 'right'
    },
    buttonRoom: {
        borderRadius: 3,
        backgroundColor: color.WHITE,
        color: color.BLACK,
        borderWidth: 2,
        borderColor: color.ALMANAKE
    }

})

export { loginStyles, splashStyles, safeAreaStyles, pointsStyles, pointStyles }
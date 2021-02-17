import AsyncStorage from '@react-native-community/async-storage'

const punto_KEY = '@punto:key'


async function savepunto(punto){
    try {
        await AsyncStorage.setItem(punto_KEY, punto)
        return punto
    } catch (error) {
        //Error
        console.log('error al guardar: ' +error.message)
        return 'Error de sintaxis'
    }
}

async function getpunto(){
    try {
        const item = await AsyncStorage.getItem(punto_KEY)
        return item
    } catch (error) {
        // Error retrieving data
        console.log("Error al recuperar:" + error.message)
        return null
    }
}

async function deletepunto(){
    try {
        await AsyncStorage.removeItem(punto_KEY)
        const item = await AsyncStorage.getItem(punto_KEY)
        return (item == null?"punto removido":"punto no removido")
    } catch (error) {
        console.log("Error al eliminar" + error.message)
        return "Error de sintaxis"
    }
}

export {savepunto, getpunto, deletepunto}
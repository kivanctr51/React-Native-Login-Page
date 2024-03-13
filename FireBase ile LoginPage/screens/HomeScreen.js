import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { auth } from '../firebase'
import { useNavigation } from '@react-navigation/native'


export default function HomeScreen() {

 const   handlerSignOut = ()=>{
    auth.signOut().then(()=>{
        navigation.navigate("Login")
    }).catch(error=>alert(error.message))   
 }

 const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Hoşgeldiniz :</Text>
      <Text style={{marginTop:10}}>{auth.currentUser?.email}</Text>
      <TouchableOpacity onPress={handlerSignOut} style={[styles.button,styles.outlineButton]}>
            <Text style={styles.outlineButtonText}>Çıkış Yap</Text>
        </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    button:{
        backgroundColor:"#0782F9",
        padding:15,
        alignItems:"center",
        borderRadius:10,
        marginTop:20
    },
    buttonText:{
        color:"#fff",
        fontSize:16,
        fontWeight:"700"
    },
})
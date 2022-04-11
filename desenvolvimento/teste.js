import React from "react";
import {View, Text, Image, StyleSheet, Button, Alert, ScrollView, } from 'react-native';


const estilo = StyleSheet.create({
    texto: {
        fontSize:15,
        color: '#ff00ff',
        marginTop: 15
    },
    


});


export default function Testap() {
 return (
    <ScrollView>


    <View>
        <Text style={estilo.texto}>testando coisas!</Text>
            
        <Button 
      
        color={'#800000'}
        title="me clica mano "
        onPress={() => Alert.alert('tu me clicou mano')}
        
        />
        <Text style={{fontSize:50}}> aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            assssssssssssssssaaasssssssssssssssssssssssss

            ssssssssssssssssssssssssssss
        </Text>

    </View>
    </ScrollView>
 
 );







}
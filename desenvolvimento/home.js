import React from "react";
import { View, Image, Text, TouchableOpacity } from "react-native";


export default function HOME() {
    return(
        

        <View>

            <View
            style={{marginLeft:15}}
            >

            <Image
            style={{position:'relative',marginTop:12}}
            source={require('./assets/images/Home.png')}
            />
            <Image
            style={{position:'absolute',marginTop:90,marginLeft:40}}
            source={require('./assets/images/grupo3.png')}
            />
            </View>






        <View>
            <Text
            style={{fontSize:33,textAlign:'center',color:'#F35B04'}}
            >Olá!</Text>
            <Text
            style={{marginLeft:9,color:'#1297A6'}}
            >
                Seja bem vindo ao Save Eats, o aplicativo que permite 
                que voce economize enquanto previne desperdício
            </Text>
            
        </View>

        <View 
        style={{flexDirection:'row',justifyContent:'center',marginTop:60}}
        >
            <TouchableOpacity>
                <Text
                style={{color:'#f0f8ff',backgroundColor:'#F35B04',borderRadius:5,padding:5 }}
                >Login</Text>

            </TouchableOpacity>
            
            <TouchableOpacity>
                <Text 
                style={{color:'#F35B04',marginLeft:23,backgroundColor:'#f5f5f5',borderRadius:5,padding:5}}
                >Crie sua conta</Text>

            </TouchableOpacity>


        </View>


        <View>
        <Text
        style={{textAlign:'center',marginTop:50}}
        >Quero acessar com minhas redes sociais</Text>

        <View 
        style={{flexDirection:'row',justifyContent:'center',marginTop:20}}
        >


        <TouchableOpacity>
           <Image
           source={require('./assets/images/gol.png')}
           />
           
        </TouchableOpacity>
       
        <TouchableOpacity
        style={{marginLeft:30}}
        >
           <Image
           source={require('./assets/images/Facbook.png')}
           />
           
        </TouchableOpacity>


        </View>
        

        </View>


        </View>







        





    );

}
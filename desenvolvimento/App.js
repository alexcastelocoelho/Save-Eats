import React from 'react';
import { StyleSheet, Text, View, Image} from 'react-native';


export default function App() {
    return (
      <View>
        <View style={{flexDirection: 'row'}}>
      <Text
      style={{marginTop:22, fontSize:12,marginLeft:12}}
      >Tv. Bom jardim, 445</Text>
        <Image 
        style={{marginTop:28, marginLeft:2}}
        source={require('./assets/images/sinal.png')} />

        </View>
      
      <Text
      style={{marginTop:5, marginLeft: 12, color:'#070707'}}
      >Bom dia, Almir!</Text>
      
    
      <View>

          <View style={{marginTop:10}}>
            <Text style={{color: `#F35B04`, marginLeft:100,fontSize:14,textDecorationLine:'underline' }}>
              Categorias
            </Text>
            <Text style={{  marginTop: -19,
        marginLeft: 200, color: '#a7a7a7'}}>Feed</Text>
          </View>


      <View style={{flexDirection:'row', marginTop: 5}}>

          <View>
          <Image
          style={{marginLeft:10}}
          source={require('./assets/images/hortifruti.png')}
          />
          <Text
          style={{fontSize:12, textAlign:'center', color: '#a7a7a7'}}
          >hortifruti</Text>
          </View>

            <View style={{marginLeft:20}}>
            <Image 
            source={require('./assets/images/limpeza.png')}
            />
            <Text
            style={{fontSize:12, textAlign:'center', color: '#a7a7a7'}}
            >limpeza</Text>
            </View>

        <View>
          <Image 
          style={{marginLeft:10}}
          source={require('./assets/images/comida.png')} />
        </View>

      </View>



      </View>
    
      <View>
          <View style={{marginTop: 10, marginLeft:10}}>

        <Image
        source={require('./assets/images/Vector.png')}
        />
        <Text style={{marginLeft: 30,marginTop: -22, fontSize: 15, color: '#000000'}}>Explorar</Text>
        
          </View>


        <View style={{flexDirection: 'row'}} >
          
        <Image
        style={{marginTop:20, resizeMode: 'contain', marginLeft:10 }} 
        source={require('./assets/images/paeisum.png')}
        />

          <View style={{marginLeft: 20, marginTop: 20}}>
          <Text style={{color:`#000000`, fontSize: 18}}>Limpador de Vidros </Text>
          
          <Text style={{color:`#000000`,fontSize: 14}}>Supermercado Lider Pedreira</Text>
          
          <Text style={{color: `#F35B04`, marginTop:3}}>R$ 6,99</Text>

          </View>

        </View>
      <View style={{flexDirection: 'row'}} >
        
        <Image
        style={{marginTop:20, resizeMode: 'contain', marginLeft:10 }} 
        source={require('./assets/images/paeisum.png')}
        />

        <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={{color:`#000000`, fontSize: 18}}>Limpador de Vidros </Text>
        <Text>Supermercado Lider Pedreira</Text>
        <Text style={{color: `#F35B04`, marginTop:3}}>R$ 6,99</Text>

        </View>

      </View>
      <View style={{flexDirection: 'row'}} >
        
        <Image
        style={{marginTop:20, resizeMode: 'contain', marginLeft:10}} 
        source={require('./assets/images/paeisum.png')}
        />

        <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={{color:`#000000`, fontSize: 18}}>Limpador de Vidros </Text>
        <Text>Supermercado Lider Pedreira</Text>
        <Text style={{color: `#F35B04`, marginTop:3}}>R$ 6,99</Text>

        </View>

      </View>
        
      <View style={{flexDirection: 'row'}} >
        <Image
        style={{marginTop:20, resizeMode: 'contain', marginLeft:10}} 
        source={require('./assets/images/paeisum.png')}
        />

        <View style={{marginLeft: 20, marginTop: 20}}>
        <Text style={{color:`#000000`, fontSize: 18}}>Limpador de Vidros </Text>
        <Text>Supermercado Lider Pedreira</Text>
        <Text style={{color: `#F35B04`, marginTop:3}}>R$ 6,99</Text>
        </View>

      </View>

      
      </View>


        <View >
            <Text style={{backgroundColor: '#F35B04',height:40, marginTop:10}}></Text>

        </View>
          

      </View>

      
);

}


     

      





      





     



  


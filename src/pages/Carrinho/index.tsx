import React from 'react'; 
import {  StyleSheet, View } from 'react-native';
import Detalhe from './Componentes/Detalhe';
import Topo from './Componentes/Topo'


export default function Carrinho() {
    return <>

        <Topo/>
        <View style={estilos.carrinho}>
        <Detalhe/>
        </View>
        
    </>
}

const estilos = StyleSheet.create({
   
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})
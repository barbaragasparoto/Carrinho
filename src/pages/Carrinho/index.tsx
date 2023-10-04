import React from 'react'; 
import {  StyleSheet, View } from 'react-native';
import carrinho from '../../mocks/carrinho';
import Detalhe from './Componentes/Detalhe';
import Topo from './Componentes/Topo';


export default function Carrinho() {
    return <>

        <Topo titulo={carrinho.topo.titulo}/>
        <View style={estilos.carrinho}>
        <Detalhe
        nome={carrinho.detalhes.nome}
        nomeFazenda={carrinho.detalhes.nomeFazenda}
        descricao={carrinho.detalhes.descricao}
        preco={carrinho.detalhes.preco}
        />
        </View>
        
    </>
}

const estilos = StyleSheet.create({
   
    carrinho: {
        paddingVertical: 8,
        paddingHorizontal: 16
    }
})
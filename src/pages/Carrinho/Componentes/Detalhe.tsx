import React from 'react'; 
import logo from '../../../assets/imagens/logo.png';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function Detalhe() {

    return <>
    <Text style={estilos.nome}>Carrinho de Compras</Text>
            
            <View style={estilos.fazenda}>
            <Image source={logo} style={estilos.imagemFazenda}/>
            <Text style={estilos.nomeFazenda}>Fazenda Etec Cidade do Livro</Text>
            </View>

            <Text style={estilos.descricao}>Uma cesta de produtos selecionados cuidadosamente da fazenda direto para a sua cozinha</Text>
            
            <Text style={estilos.preco}>R$40,00</Text>
    </>

}

const estilos = StyleSheet.create({
   
    nome:{
        fontSize: 26,
        lineHeight: 42,
        color: "#464646",
        fontFamily: "MontBold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        fontFamily: "MontBold",
        lineHeight: 26,
        marginLeft: 12
    },
    descricao: {
        color: "#A3A3A3",
        fontFamily: "MontRegItalic"
    },
    preco: {
        fontSize: 26,
        fontFamily: "MontRegular",
        color: "#2A9F85",
        marginTop: 8
    }

})
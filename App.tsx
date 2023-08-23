import React from 'react'
import { SafeAreaView, StatusBar } from 'react-native';
import Carrinho from './src/pages/Carrinho/index';
import { useFonts, Montserrat_400Regular, Montserrat_400Regular_Italic, Montserrat_700Bold } from '@expo-google-fonts/montserrat';


export default function App() {
  const [fonteCarregada] = useFonts({
    "MontRegular": Montserrat_400Regular,
    "MontRegItalic": Montserrat_400Regular_Italic,
    "MontBold": Montserrat_700Bold
  })

  if (!fonteCarregada) {
    return null;
  }

  return (                                                                                         
    <SafeAreaView>
      <StatusBar/>
      <Carrinho/>
    </SafeAreaView>
  );
}



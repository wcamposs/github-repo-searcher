import { StatusBar } from 'expo-status-bar';
import React, { Fragment } from 'react';
import { AppLoading } from 'expo';

import { useFonts, Archivo_400Regular, Archivo_700Bold } from '@expo-google-fonts/archivo';

import AppStack from './src/routes/AppStack';

export default function App() {
  let [fontsLoaded] = useFonts({
    Archivo_400Regular,
    Archivo_700Bold,
  });

  if(!fontsLoaded) {
    return(
      <AppLoading />
    );
  } else {
    return (
      <Fragment >
        <StatusBar style="auto"/>
  
        <AppStack />
      </Fragment>
    );
  }
}


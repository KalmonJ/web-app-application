import { DripsyProvider, makeTheme, View } from 'dripsy'
import React from 'react'
import { theme } from './createTheme'
import {
  useFonts,
  Montserrat_400Regular,
  Montserrat_700Bold,
} from '@expo-google-fonts/montserrat'
import AppLoading from 'expo-app-loading'

export function Dripsy({ children }: { children: React.ReactNode }) {
  const [fontsLoaded] = useFonts({
    MontserratBold: Montserrat_700Bold,
    MontserratRegular: Montserrat_400Regular,
  })

  if (!fontsLoaded) {
    return <AppLoading />
  }

  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      {children}
    </DripsyProvider>
  )
}

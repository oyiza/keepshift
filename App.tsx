import React, { useCallback } from 'react'
import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { database } from './src/data/database'
import * as SQLite from 'expo-sqlite'

// custom imports
import Header from './src/components/Header/Header'
import { styles } from './BaseStyle'
import InputField from './src/components/InputField/InputField'

export default function App () {
  const [fontsLoaded] = useFonts({
    'Sen-Regular': require('./assets/fonts/Sen-Regular.ttf'),
    'Sen-Bold': require('./assets/fonts/Sen-Bold.ttf'),
    'Sen-ExtraBold': require('./assets/fonts/Sen-ExtraBold.ttf')
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  // database.createTable()

  // const getData = () => {
  //   database.getItems()
  // }

  return (
    <LinearGradient
      colors={['rgba(133, 160, 255, 0.73)', 'transparent']}
      style={styles.body}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <View onLayout={onLayoutRootView} style={styles.container}>
        <Header fontFamily={'Sen-Bold'}></Header>
        <View>
          <InputField fontFamily={'Sen-Bold'} placeholder='Add Company' />
        </View>
        <StatusBar style='auto' />
      </View>
    </LinearGradient>
  )
}

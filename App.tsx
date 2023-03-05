import { StatusBar } from 'expo-status-bar'
import { View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'
import { useFonts } from 'expo-font'
import { LinearGradient } from 'expo-linear-gradient'
import { useCallback } from 'react'

import Header from './src/components/Header/Header'

// custom imports
import { styles } from './BaseStyle'

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

  return (
    <LinearGradient
      colors={['rgba(133, 160, 255, 0.73)', 'transparent']}
      style={styles.body}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <View onLayout={onLayoutRootView} style={styles.container}>
        <Header fontFamily={'Sen-Bold'}></Header>
        <StatusBar style='auto' />
      </View>
    </LinearGradient>
  )
}

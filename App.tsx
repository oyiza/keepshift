import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

// custom imports
import { styles } from './baseStyle'

export default function App () {
  return (
    <LinearGradient
      colors={['rgba(133, 160, 255, 0.73)', 'transparent']}
      style={styles.body}
      start={{ x: 0.5, y: 1 }}
      end={{ x: 0.5, y: 0 }}
    >
      <View>
        <Text>Keepshift</Text>

        {/* Status bar component below allows us to go full screen in the notch area */}
        <StatusBar style='auto' />
      </View>
    </LinearGradient>
  )
}

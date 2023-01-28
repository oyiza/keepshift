import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';

// custom imports
import { styles } from './baseStyle';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

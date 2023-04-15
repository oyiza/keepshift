import React from 'react'
import { Text, View } from 'react-native'
import { styles } from './HeaderStyle'

interface HeaderProps {
  fontFamily: string
}

export default function Header ({ fontFamily }: HeaderProps) {
  return (
    <View>
      <Text style={{ ...styles.text, fontFamily: fontFamily }}>Keepshift</Text>
    </View>
  )
}

import React, { useState } from 'react'
import { TextInput, View } from 'react-native'
import { styles } from './InputFieldStyle'

type InputFieldProps = {
  fontFamily: string
  placeholder: string
}

export default function InputField ({
  fontFamily,
  placeholder = 'Input field'
}: InputFieldProps) {
  const [text, onChangeText] = useState('')

  return (
    <View>
      <TextInput
        style={{ ...styles.input, fontFamily: fontFamily }}
        onChangeText={onChangeText}
        value={text}
        placeholder={placeholder}
      />
    </View>
  )
}

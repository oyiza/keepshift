import React from 'react'
import { styles } from './ButtonStyle'
import { Pressable, Text } from 'react-native'

import { colors } from './ButtonStyle'

const { WHITE, DARK, MINE_SHAFT, VIVID_TANGERINE } = colors

type PropsType = {
  dark?: boolean
  danger?: boolean
  text: string
  fontFamily: string
}

const KeepshiftButton = ({
  dark = false,
  danger = false,
  text = 'Default Button',
  fontFamily
}: PropsType) => {
  const primary = !dark && !danger
  return (
    <>
      {dark && (
        <Pressable style={{ ...styles.button, backgroundColor: MINE_SHAFT }}>
          <Text
            style={{
              ...styles.text,
              fontFamily: fontFamily,
              color: WHITE
            }}
          >
            {text}
          </Text>
        </Pressable>
      )}
      {danger && (
        <Pressable
          style={{ ...styles.button, backgroundColor: VIVID_TANGERINE }}
        >
          <Text
            style={{
              ...styles.text,
              fontFamily: fontFamily,
              color: DARK
            }}
          >
            {text}
          </Text>
        </Pressable>
      )}
      {primary && (
        <Pressable
          style={{
            ...styles.button,
            backgroundColor: WHITE
          }}
        >
          <Text
            style={{
              ...styles.text,
              fontFamily: fontFamily,
              color: DARK
            }}
          >
            {text}
          </Text>
        </Pressable>
      )}
    </>
  )
}

export default KeepshiftButton

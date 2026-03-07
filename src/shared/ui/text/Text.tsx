import { clsx } from 'clsx'
import React from 'react'
import { Text as RNText, TextProps } from 'react-native'

export function Text(props: TextProps) {
  return (
    <RNText {...props} className={clsx('font-poppins', props.className)}>
      {props.children}
    </RNText>
  )
}

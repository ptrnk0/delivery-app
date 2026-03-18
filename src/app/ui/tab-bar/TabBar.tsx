import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { clsx } from 'clsx'
import React from 'react'
import { View } from 'react-native'

import { TabItem } from './TabItem'

export function TabBar(props: BottomTabBarProps) {
  return (
    <View
      style={{
        paddingBottom: props.insets.bottom,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        backgroundColor: 'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
      }}
    >
      {props.state.routes.map((route, index) => (
        <TabItem key={route.key} index={index} route={route} {...props} />
      ))}
    </View>
  )
}

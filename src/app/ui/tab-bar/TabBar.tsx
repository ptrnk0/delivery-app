import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { View } from 'react-native'

import { TabItem } from './TabItem'

export function TabBar(props: BottomTabBarProps) {
  return (
    <View style={{ paddingBottom: props.insets.bottom }}>
      {props.state.routes.map((item, index) => (
        <TabItem key={item.key} index={index} {...props} />
      ))}
    </View>
  )
}

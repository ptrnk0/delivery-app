import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

import { Text } from '../text'

interface ITabItemProps {
  index: number
}

export function TabItem(props: ITabItemProps & BottomTabBarProps) {
  const isActive = props.state.index === props.index
  // const Icon = item.icon

  return (
    <Pressable
      style={styles.container}
      // onPress={() => nav(item.path)}
      className='items-center gap-1'
    >
      {/* <Icon size={24} color={isActive ? '#00bc7d' : 'black'} /> */}

      <Text>{props.state.routes[props.index].name}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {}
})

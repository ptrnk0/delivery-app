import { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import { NavigationRoute, ParamListBase } from '@react-navigation/native'
import React from 'react'
import { Pressable, StyleSheet } from 'react-native'

import { Text } from '@/shared/ui/text'

interface ITabItemProps {
  index: number
  route: NavigationRoute<ParamListBase, string>
}

export function TabItem(props: ITabItemProps & BottomTabBarProps) {
  const { state, index, route, navigation, descriptors } = props

  const Icon = descriptors[route.key].options.tabBarIcon

  const isFocused = state.index === index

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: route.key,
      canPreventDefault: true
    })

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate(route.name, route.params)
    }
  }

  return (
    <Pressable onPress={onPress} className='items-center gap-1 pt-4'>
      {Icon ? (
        <Icon
          size={24}
          color={isFocused ? '#00bc7d' : 'black'}
          focused={isFocused}
        />
      ) : null}

      <Text>{state.routes[index].name}</Text>
    </Pressable>
  )
}

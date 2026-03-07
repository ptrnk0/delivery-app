import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { StyleSheet } from 'react-native'

import { Auth } from '@/pages/auth'

import { useSession } from '@/entities/session'

import { RootStackParamList } from '@/shared/lib'

import { ROUTES } from '.'

const Stack = createNativeStackNavigator<RootStackParamList>()

export function PrivateRoutes() {
  const { user } = useSession()

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {user ? (
        ROUTES.map(route => (
          <Stack.Screen
            key={route.name}
            name={route.name}
            component={route.component}
          />
        ))
      ) : (
        <Stack.Screen name='Auth' component={Auth} />
      )}
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {}
})

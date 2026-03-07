import { SafeAreaProvider } from 'react-native-safe-area-context'

import '../../../global.css'

import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import { RootStackParamList } from '@/shared/lib'

import { ROUTES } from '../routes'

const Stack = createNativeStackNavigator<RootStackParamList>()

export default function App() {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ headerShown: false }}>
            {ROUTES.map(route => (
              <Stack.Screen
                key={route.name}
                name={route.name}
                component={route.component}
              />
            ))}
          </Stack.Navigator>
        </NavigationContainer>
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}

import { SafeAreaProvider } from 'react-native-safe-area-context'

import '../../../global.css'

import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import { SessionProvider } from '../providers'
import { PrivateRoutes } from '../routes/PrivateRoutes'

export default function App() {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <NavigationContainer>
          <SessionProvider>
            <PrivateRoutes />
          </SessionProvider>
        </NavigationContainer>
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}

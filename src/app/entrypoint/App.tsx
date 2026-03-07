import { SafeAreaProvider } from 'react-native-safe-area-context'

import '../../../global.css'

import React from 'react'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import { SessionProvider } from '../providers'
import { Routes } from '../routes'

export default function App() {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <SessionProvider>
          <Routes />

          {/* {user && currentRoute && (
              <BottomTabs nav={navRef.navigate} currentRoute={currentRoute} />
            )} */}
        </SessionProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}

import { SafeAreaProvider } from 'react-native-safe-area-context'

import '../../../global.css'

import React from 'react'
import { KeyboardProvider } from 'react-native-keyboard-controller'

import { SessionProvider, ToastProvider } from '../providers'
import { Routes } from '../routes'

export default function App() {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <ToastProvider>
          <SessionProvider>
            <Routes />
          </SessionProvider>
        </ToastProvider>
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}

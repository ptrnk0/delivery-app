import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Navigation } from '@/navigation/Navigation'

import './global.css'

import { KeyboardProvider } from 'react-native-keyboard-controller'

export default function App() {
  return (
    <SafeAreaProvider>
      <KeyboardProvider>
        <Navigation />
      </KeyboardProvider>
    </SafeAreaProvider>
  )
}

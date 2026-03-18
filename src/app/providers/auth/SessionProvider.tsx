import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect, useState } from 'react'

import { AuthContext, TypeUserState } from '@/entities/auth'

SplashScreen.preventAutoHideAsync()

interface IAuthProviderProps {
  children: React.ReactNode
}

export function AuthProvider({ children }: IAuthProviderProps) {
  const [user, setUser] = useState<TypeUserState>(null)

  useEffect(() => {
    const checkAccessToken = async () => {
      try {
        await SplashScreen.hideAsync()
      } catch {
        await SplashScreen.hideAsync()
      }
    }

    checkAccessToken()
  }, [])

  return <AuthContext value={{ user, setUser }}>{children}</AuthContext>
}

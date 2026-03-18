import * as SplashScreen from 'expo-splash-screen'
import React, { useEffect, useState } from 'react'

import { SessionContext, TypeUserState } from '@/entities/session'

SplashScreen.preventAutoHideAsync()

interface ISessionProvideProps {
  children: React.ReactNode
}

export function SessionProvider({ children }: ISessionProvideProps) {
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

  return <SessionContext value={{ user, setUser }}>{children}</SessionContext>
}

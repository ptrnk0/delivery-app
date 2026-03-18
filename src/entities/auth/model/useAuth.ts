import { useContext } from 'react'

import { AuthContext } from './AuthContext'

export function useAuth() {
  const context = useContext(AuthContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}

export function useIsAuthenticate() {
  return !!useAuth().user
}

export function useIsNotAuthenticated() {
  return !useAuth().user
}

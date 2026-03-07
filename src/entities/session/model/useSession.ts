import { useContext } from 'react'

import { SessionContext } from './SessionContext'

export function useSession() {
  const context = useContext(SessionContext)

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider')
  }

  return context
}

'use client'
import { createContext, useContext } from 'react'

const ZoraProfileContext = createContext(null)

export function ZoraProfileProvider({ children, profile }) {
  return <ZoraProfileContext.Provider value={profile}>{children}</ZoraProfileContext.Provider>
}

export function useZoraProfileProvider() {
  const context = useContext(ZoraProfileContext)
  if (!context) {
    throw new Error('useZoraProfileProvider must be used within a ZoraProfileProvider')
  }
  return context
}

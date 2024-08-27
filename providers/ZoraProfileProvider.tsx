'use client'

import useZoraProfile from '@/hooks/useZoraProfile'
import React, { createContext, useContext, useMemo } from 'react'

const ZoraProfileContext = createContext(undefined)

const ZoraProfileProvider = ({ children }: any) => {
  const zoraProfile = useZoraProfile()

  const value = useMemo(() => ({ ...zoraProfile }), [zoraProfile])

  return <ZoraProfileContext.Provider value={value}>{children}</ZoraProfileContext.Provider>
}

const useZoraProfileProvider = () => {
  const context = useContext(ZoraProfileContext)
  if (!context) {
    throw new Error('useZoraProfileProvider must be used within a ZoraProfileProvider')
  }
  return context
}

export { ZoraProfileProvider, useZoraProfileProvider }

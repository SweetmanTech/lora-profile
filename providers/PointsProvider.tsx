'use client'

import React, { createContext, useContext } from 'react'

const PointsContext = createContext(undefined)

export function PointsProvider({ collections, children }) {
  return <PointsContext.Provider value={{ collections }}>{children}</PointsContext.Provider>
}

export function usePoints() {
  const context = useContext(PointsContext)
  if (!context) {
    throw new Error('usePoints must be used within a PointsProvider')
  }
  return context
}

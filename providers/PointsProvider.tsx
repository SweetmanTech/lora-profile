'use client'

import React, { createContext, useContext } from 'react'

const PointsContext = createContext(undefined)

export function PointsProvider({ events, children }) {
  return <PointsContext.Provider value={{ events }}>{children}</PointsContext.Provider>
}

export function usePoints() {
  const context = useContext(PointsContext)
  if (!context) {
    throw new Error('usePoints must be used within a PointsProvider')
  }
  return context
}

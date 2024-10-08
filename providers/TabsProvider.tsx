'use client'

import useTabs from '@/hooks/useTabs'
import React, { createContext, useContext, useMemo } from 'react'

const TabsContext = createContext<ReturnType<typeof useTabs>>({} as ReturnType<typeof useTabs>)

export function TabsProvider({ children }) {
  const tabs = useTabs()
  const value = useMemo(() => ({ ...tabs }), [tabs])

  return <TabsContext.Provider value={value}>{children}</TabsContext.Provider>
}

export function useTabsProvider() {
  const context = useContext(TabsContext)
  if (!context) {
    throw new Error('useTabsProvider must be used within a TabsProvider')
  }
  return context
}

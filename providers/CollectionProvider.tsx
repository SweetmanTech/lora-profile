'use client'

import useCollections from '@/hooks/useCollections'
import { createContext, useContext, useMemo } from 'react'

const CollectionContext = createContext<ReturnType<typeof useCollections>>(
  {} as ReturnType<typeof useCollections>,
)

const CollectionProvider = ({ creatorAddress, children }) => {
  const collections = useCollections(creatorAddress)

  const value = useMemo(
    () => ({
      ...collections,
    }),
    [collections],
  )

  return <CollectionContext.Provider value={value}>{children}</CollectionContext.Provider>
}

export const useCollectionProvider = () => {
  const context = useContext(CollectionContext)
  if (!context) {
    throw new Error('useCollection must be used within a CollectionProvider')
  }
  return context
}

export default CollectionProvider

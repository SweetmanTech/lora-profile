'use client'

import { usePoints } from '@/providers/PointsProvider'
import Collection from './Collection'
import { COLLECTION_TYPE } from '@/types/collection'

const Collections = () => {
  const { collections } = usePoints()

  return (
    <div className="w-full max-w-3xl overflow-hidden mb-2">
      <div className="flex gap-2 overflow-x-auto">
        {collections.collections.map((collection: COLLECTION_TYPE) => (
          <Collection data={collection} key={collection.address} />
        ))}
      </div>
    </div>
  )
}

export default Collections

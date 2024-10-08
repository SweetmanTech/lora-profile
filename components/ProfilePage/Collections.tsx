'use client'

import getCollections from '@/lib/getCollections'
import { usePoints } from '@/providers/PointsProvider'
import Collection from './Collection'
import { EVENT_TYPE } from '@/types/event'

const Collections = () => {
  const { events } = usePoints()
  const collections = getCollections(events)

  return (
    <div className="w-screen px-3 md:px-0 md:w-full max-w-3xl overflow-hidden mt-6 mb-2 border border-t">
      <div className="flex gap-2 overflow-x-auto">
        {collections.map((collection: EVENT_TYPE) => (
          <Collection data={collection} key={collection.address} />
        ))}
      </div>
    </div>
  )
}

export default Collections

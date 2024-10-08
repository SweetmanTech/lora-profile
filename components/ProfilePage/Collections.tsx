'use client'

import Collection from './Collection'
import { useCollectionProvider } from '@/providers/CollectionProvider'
import { COLLECTION_TYPE } from '@/types/collection'
import { METADATA_TYPE } from '@/types/metadata'

const Collections = () => {
  const { metadataOfCollection } = useCollectionProvider()

  return (
    <div className="w-screen px-3 md:px-0 md:w-full max-w-3xl overflow-hidden mt-6 mb-2 border border-t">
      <div className="flex gap-2 overflow-x-auto">
        {metadataOfCollection.map((metadata: METADATA_TYPE & COLLECTION_TYPE, index: number) => (
          <Collection data={metadata} key={index} />
        ))}
      </div>
    </div>
  )
}

export default Collections

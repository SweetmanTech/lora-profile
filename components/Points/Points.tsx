'use client'
import Point from './Point'
import { useCollectionProvider } from '@/providers/CollectionProvider'

const Points = () => {
  const { metadataOfTokens, loading } = useCollectionProvider()

  return (
    <div className="w-screen md:w-full grid grid-cols-3 gap-0.5 overflow-y-auto mb-16 grow">
      {!loading && metadataOfTokens.map((metadata, index) => <Point key={index} data={metadata} />)}
    </div>
  )
}

export default Points

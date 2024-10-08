'use client'
import Point from './Point'
import { useCollectionProvider } from '@/providers/CollectionProvider'

const Points = () => {
  const { metadataOfTokens } = useCollectionProvider()

  return (
    <div className="w-screen md:w-full grid grid-cols-3 gap-1 md:gap-2 overflow-y-auto max-h-[270px]">
      {metadataOfTokens.map((metadata, index) => (
        <Point key={index} data={metadata} />
      ))}
    </div>
  )
}

export default Points

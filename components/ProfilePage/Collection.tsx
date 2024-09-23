'use client'

import useCollection from '@/hooks/useCollection'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import { EVENT_TYPE } from '@/types/event'
import { METADATA_TYPE } from '@/types/metadata'
import Image from 'next/image'

const Collection = ({ data }: { data: EVENT_TYPE }) => {
  const collection: METADATA_TYPE = useCollection(data)

  return (
    <div className="relative flex-none w-[150px] h-[150px]">
      <Image src={getIpfsLink(collection?.image || '')} alt="" layout="fill" />
    </div>
  )
}

export default Collection

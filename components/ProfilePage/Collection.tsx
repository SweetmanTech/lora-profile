'use client'

import useCollection from '@/hooks/useCollection'
import getZoraChainName from '@/lib/getZoraChainName'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import getCollectionUrl from '@/lib/zora/getCollectionUrl'
import { EVENT_TYPE } from '@/types/event'
import { METADATA_TYPE } from '@/types/metadata'
import Image from 'next/image'

const Collection = ({ data }: { data: EVENT_TYPE }) => {
  const collection: METADATA_TYPE = useCollection(data)
  const chainName = data.metadata.uniqueId.split('-')[0]

  const handleClick = (address) => {
    const isTestnet = chainName.toLowerCase().includes('sepolia')
    const url = getCollectionUrl(getZoraChainName(chainName), address, isTestnet)
    window.open(url, '_blank')
  }

  return (
    <div className="flex flex-col gap-4 md:gap-2 w-[74px] md:w-[150px]">
      <button
        className="relative flex-none w-[74px] md:w-[150px] aspect-square rounded-md overflow-hidden"
        type="button"
        onClick={() => handleClick(data.metadata.collection)}
      >
        <Image src={getIpfsLink(collection?.image || '')} alt="" layout="fill" />
      </button>
      <p className="w-full overflow-hidden text-ellipse truncate text-md text-center">
        {collection?.name}
      </p>
    </div>
  )
}

export default Collection

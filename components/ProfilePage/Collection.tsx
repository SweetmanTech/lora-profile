'use client'

import getZoraChainName from '@/lib/getZoraChainName'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import getCollectionUrl from '@/lib/zora/getCollectionUrl'
import { COLLECTION_TYPE } from '@/types/collection'
import { METADATA_TYPE } from '@/types/metadata'
import Image from 'next/image'

const Collection = ({ data }: { data: METADATA_TYPE & COLLECTION_TYPE }) => {
  const handleClick = () => {
    const chainName = getZoraChainName(data.chainId)
    const isTestnet = chainName.toLowerCase().includes('sep')
    const url = getCollectionUrl(chainName, data.address, isTestnet)
    window.open(url, '_blank')
  }

  return (
    <div className="flex flex-col gap-4 md:gap-2 w-[74px] md:w-[150px]">
      <button
        className="relative flex-none w-[74px] md:w-[150px] aspect-square rounded-md overflow-hidden"
        type="button"
        onClick={handleClick}
      >
        <Image src={getIpfsLink(data.image || '')} alt="" layout="fill" className="object-cover" />
      </button>
      <p className="w-full overflow-hidden text-ellipse truncate text-md text-center">
        {data?.name}
      </p>
    </div>
  )
}

export default Collection

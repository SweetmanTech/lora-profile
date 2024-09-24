'use client'

import useCollection from '@/hooks/useCollection'
import getZoraChainName from '@/lib/getZoraChainName'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import isTestnet from '@/lib/isTestnet'
import getCollectionUrl from '@/lib/zora/getCollectionUrl'
import { COLLECTION_TYPE } from '@/types/collection'
import { METADATA_TYPE } from '@/types/metadata'
import Image from 'next/image'

const Collection = ({ data }: { data: COLLECTION_TYPE }) => {
  const collection: METADATA_TYPE = useCollection(data)
  const chainId = parseInt(data.chainId, 10)

  const handleClick = () => {
    const url = getCollectionUrl(getZoraChainName(chainId), data.address, isTestnet(chainId))
    window.open(url, '_blank')
  }

  return (
    <button className="relative flex-none w-[150px] h-[150px]" type="button" onClick={handleClick}>
      <Image src={getIpfsLink(collection?.image || '')} alt="" layout="fill" />
    </button>
  )
}

export default Collection

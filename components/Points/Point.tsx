import getZoraChainName from '@/lib/getZoraChainName'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import getCollectionUrl from '@/lib/zora/getCollectionUrl'
import { COLLECTION_TYPE } from '@/types/collection'
import { METADATA_TYPE } from '@/types/metadata'
import Image from 'next/image'

const Point = ({ data }: { data: METADATA_TYPE & COLLECTION_TYPE & { tokenId: number } }) => {
  const handleClick = () => {
    const chainName = getZoraChainName(data.chainId)
    const isTestnet = chainName.toLowerCase().includes('sep')
    const url = getCollectionUrl(
      getZoraChainName(data.chainId),
      data.address,
      isTestnet,
      data.tokenId.toString(),
    )
    window.open(url, '_blank')
  }

  return (
    <button className="relative w-full aspect-[1/1]" type="button" onClick={handleClick}>
      <Image
        src={getIpfsLink(data?.image || '')}
        alt=""
        layout="fill"
        className="absolute w-full h-full left-0  top-0 object-cover"
      />
    </button>
  )
}

export default Point

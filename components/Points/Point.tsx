import useMetadata from '@/hooks/useMetadata'
import getZoraChainName from '@/lib/getZoraChainName'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import getCollectionUrl from '@/lib/zora/getCollectionUrl'
import { EVENT_TYPE } from '@/types/event'
import { METADATA_TYPE } from '@/types/metadata'
import Image from 'next/image'

const Point = ({ event }: { event: EVENT_TYPE }) => {
  const metadata: METADATA_TYPE = useMetadata(event)
  const chainName = event.metadata.uniqueId.split('-')[0]

  const handleClick = (address) => {
    const isTestnet = chainName.toLowerCase().includes('sepolia')
    const url = getCollectionUrl(
      getZoraChainName(chainName),
      address,
      isTestnet,
      event.metadata.tokenId,
    )
    window.open(url, '_blank')
  }

  return (
    <button
      className="relative w-full aspect-[1/1]"
      type="button"
      onClick={() => handleClick(event.metadata.collection)}
    >
      <Image
        src={getIpfsLink(metadata?.image || '')}
        alt=""
        layout="fill"
        className="absolute w-full h-full left-0  top-0"
      />
    </button>
  )
}

export default Point

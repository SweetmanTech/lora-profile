import useMetadata from '@/hooks/useMetadata'
import getZoraChainName from '@/lib/getZoraChainName'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import isTestnet from '@/lib/isTestnet'
import getCollectionUrl from '@/lib/zora/getCollectionUrl'
import { METADATA_TYPE } from '@/types/metadata'
import { TOKEN_TYPE } from '@/types/token'
import Image from 'next/image'

const Point = ({ token }: { token: TOKEN_TYPE }) => {
  const metadata: METADATA_TYPE = useMetadata(token)
  const chainId = parseInt(token.chainId, 10)

  const handleClick = () => {
    const url = getCollectionUrl(
      getZoraChainName(chainId),
      token.collectionAddress,
      isTestnet(chainId),
      token.tokenId,
    )
    window.open(url, '_blank')
  }

  return (
    <button className="relative w-full aspect-[1/1]" type="button" onClick={handleClick}>
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

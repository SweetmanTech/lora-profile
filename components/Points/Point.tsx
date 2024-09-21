import useMetadata from '@/hooks/useMetadata'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import { EVENT_TYPE } from '@/types/event'
import { METADATA_TYPE } from '@/types/metadata'
import Image from 'next/image'

const Point = ({ event }: { event: EVENT_TYPE }) => {
  const metadata: METADATA_TYPE = useMetadata(event)

  return (
    <div className="relative w-full aspect-[1/1]">
      <Image
        src={getIpfsLink(metadata?.image || '')}
        alt=""
        layout="fill"
        className="absolute w-full h-full left-0  top-0"
      />
      <p>{metadata?.name || ''}</p>
    </div>
  )
}

export default Point

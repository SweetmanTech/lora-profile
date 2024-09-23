import { UPDATED_PERMISSIONS } from '@/lib/consts'
import getZoraChainName from '@/lib/getZoraChainName'
import getTimeAgo from '@/lib/stack/getTimeAgo'
import { cn } from '@/lib/utils'
import getCollectionUrl from '@/lib/zora/getCollectionUrl'

const Point = ({ event }: any) => {
  const chainName = event.metadata.uniqueId.split('-')[0]
  const handleClick = (address, eventType) => {
    if (eventType !== UPDATED_PERMISSIONS) return
    const isTestNet = chainName.toLowerCase().includes('sepolia')
    const url = getCollectionUrl(getZoraChainName(chainName), address, isTestNet)
    window.open(url, '_blank')
  }

  return (
    <div className="flex gap-3 items-center">
      <button
        type="button"
        className={cn('text-xl text-blue-700')}
        onClick={() => handleClick(event.metadata.collection, event.event)}
      >
        {event.event.replace(/_/g, ' ')}
      </button>
      <p>({getTimeAgo(event.timestamp)})</p>
      <a href="https://www.stack.so/leaderboard/leaderboard-40a3-78225-3067" target="_blank">
        <p className="text-green-700 text-xl">+{event.points} points</p>
      </a>
    </div>
  )
}

export default Point

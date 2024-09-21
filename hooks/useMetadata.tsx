import { getPublicClient } from '@/lib/clients'
import getChainId from '@/lib/getChainId'
import { useEffect, useState } from 'react'
import { Address } from 'viem'
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments'
import { EVENT_TYPE } from '@/types/event'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'

const useMetadata = (event: EVENT_TYPE) => {
  const [metadata, setMetadata] = useState(null)

  useEffect(() => {
    const init = async () => {
      const chainName = event.metadata.uniqueId.split('-')[0]
      const collectionAddress = event.metadata.collection
      const tokenId = event.metadata.tokenId
      const chainId = getChainId(chainName)
      const publicClient = getPublicClient(chainId)
      const uri = await publicClient.readContract({
        address: collectionAddress as Address,
        abi: zoraCreator1155ImplABI,
        functionName: 'uri',
        args: [BigInt(tokenId)],
      })

      const response = await fetch(getIpfsLink(uri))
      const metadata = await response.json()
      setMetadata(metadata)
    }

    if (!event) return

    init()
  }, [event])

  return metadata
}

export default useMetadata

import { getPublicClient } from '@/lib/clients'
import getChainId from '@/lib/getChainId'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import { EVENT_TYPE } from '@/types/event'
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments'
import { useEffect, useState } from 'react'
import { Address } from 'viem'

const useCollection = (data: EVENT_TYPE) => {
  const [collection, setCollection] = useState(null)

  useEffect(() => {
    const init = async () => {
      const chainName = data.metadata.uniqueId.split('-')[0]
      const collectionAddress = data.metadata.collection
      const chainId = getChainId(chainName)
      const publicClient = getPublicClient(chainId)
      const uri = await publicClient.readContract({
        address: collectionAddress as Address,
        abi: zoraCreator1155ImplABI,
        functionName: 'contractURI',
      })

      const response = await fetch(getIpfsLink(uri))
      const metadata = await response.json()
      setCollection(metadata)
    }

    init()
  }, [data])

  return collection
}

export default useCollection

import { getPublicClient } from '@/lib/clients'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import { COLLECTION_TYPE } from '@/types/collection'
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments'
import { useEffect, useState } from 'react'
import { Address } from 'viem'

const useCollection = (data: COLLECTION_TYPE) => {
  const [collection, setCollection] = useState(null)

  useEffect(() => {
    const init = async () => {
      const publicClient = getPublicClient(parseInt(data.chainId, 10))
      const uri = await publicClient.readContract({
        address: data.address as Address,
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

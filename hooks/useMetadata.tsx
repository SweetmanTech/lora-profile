import { getPublicClient } from '@/lib/clients'
import { useEffect, useState } from 'react'
import { Address } from 'viem'
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments'
import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import { TOKEN_TYPE } from '@/types/token'

const useMetadata = (token: TOKEN_TYPE) => {
  const [metadata, setMetadata] = useState(null)

  useEffect(() => {
    const init = async () => {
      const publicClient = getPublicClient(parseInt(token.chainId, 10))
      const uri = await publicClient.readContract({
        address: token.collectionAddress as Address,
        abi: zoraCreator1155ImplABI,
        functionName: 'uri',
        args: [BigInt(token.tokenId)],
      })

      const response = await fetch(getIpfsLink(uri))
      const metadata = await response.json()
      setMetadata(metadata)
    }

    if (!token) return

    init()
  }, [token])

  return metadata
}

export default useMetadata

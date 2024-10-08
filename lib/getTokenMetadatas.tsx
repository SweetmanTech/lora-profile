import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import { COLLECTION_TYPE } from '@/types/collection'
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments'
import { Address } from 'viem'
import { getPublicClient } from './clients'
import groupByChainId from './groupByChainId'
import fetchTimeout from './fetchTimeout'

const getTokenMetadatas = async (collections: COLLECTION_TYPE[]) => {
  let tokenUris = []
  let filtered = []
  const grouped = groupByChainId(collections)
  const collectionsGroup = Object.values(grouped)

  for (const group of collectionsGroup) {
    const calls = []
    for (const collection of group) {
      for (let i = 1; i <= collection.tokensCreated; i++) {
        calls.push({
          address: collection.address as Address,
          abi: zoraCreator1155ImplABI,
          functionName: 'uri',
          args: [i],
        })
      }
    }
    const publicClient: any = getPublicClient(group[0].chainId)

    const results = await publicClient.multicall({
      contracts: calls,
    })

    const uris = results.filter((result: any) => !result.error).map((result: any) => result.result)
    tokenUris = tokenUris.concat(uris)
    const filteredTokens = calls
      .filter((_, i) => !results[i]?.error)
      .map((call) => ({
        address: call.address,
        tokenId: call.args[0],
        chainId: group[0].chainId,
      }))
    filtered = filtered.concat(filteredTokens)
  }
  const apiPromises = tokenUris.map(async (uri: string, i: number) => {
    try {
      const metadata = await fetchTimeout(getIpfsLink(uri))
      return {
        ...metadata,
        ...filtered[i],
      }
    } catch (error) {
      return null
    }
  })

  const metadata: any = await Promise.all(apiPromises)

  return metadata.filter((metadata) => metadata)
}

export default getTokenMetadatas

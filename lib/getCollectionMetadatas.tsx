import getIpfsLink from '@/lib/ipfs/getIpfsLink'
import { COLLECTION_TYPE } from '@/types/collection'
import { zoraCreator1155ImplABI } from '@zoralabs/protocol-deployments'
import { Address } from 'viem'
import { getPublicClient } from './clients'
import groupByChainId from './groupByChainId'

const getCollectionMetadatas = async (collections: COLLECTION_TYPE[]) => {
  let collectionUris = []
  let filtered = []

  const grouped = groupByChainId(collections)
  const collectionsGroup = Object.values(grouped)

  for (const group of collectionsGroup) {
    const calls = []
    for (const collection of group) {
      calls.push({
        address: collection.address as Address,
        abi: zoraCreator1155ImplABI,
        functionName: 'contractURI',
      })
    }
    const publicClient: any = getPublicClient(group[0].chainId)

    const results = await publicClient.multicall({
      contracts: calls,
    })

    const uris = results.filter((result: any) => !result.error).map((result: any) => result.result)
    filtered = group.filter((_: any, i: number) => !results[i]?.error)
    collectionUris = collectionUris.concat(uris)
    filtered = filtered.concat(filtered)
  }

  const metadataPromise = collectionUris.map(async (uri: string) => {
    const response = await fetch(getIpfsLink(uri))
    const metadata = await response.json()
    return metadata
  })

  const metadata: any = await Promise.all(metadataPromise)

  return metadata.map((data, i) => ({
    ...data,
    ...filtered[i],
  }))
}

export default getCollectionMetadatas

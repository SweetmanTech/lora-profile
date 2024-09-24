import { Address } from 'viem'

const getCollections = async (address: Address) => {
  const response = await fetch(`https://api.myco.wtf/api/zora/collections?creator=${address}`)
  const data = await response.json()
  const collections = data.collections.reverse()
  const tokens = []

  for (const collection of collections) {
    const tokensCreated = parseInt(collection.tokensCreated, 10)
    for (let tokenId = tokensCreated; tokenId >= 1; tokenId--) {
      tokens.push({
        collectionAddress: collection.address,
        tokenId,
        chainId: collection.chainId,
      })
    }
  }

  return {
    collections,
    tokens,
  }
}

export default getCollections

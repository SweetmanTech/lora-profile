import { Address } from 'viem'

const getCollections = async (address: Address) => {
  const response = await fetch(`https://api.myco.wtf/api/zora/collections?creator=${address}`)
  const data = await response.json()
  const collections = data.collections
  const tokens = []

  for (let collection of collections) {
    const tokensCreated = parseInt(collection.tokensCreated, 10)
    for (let tokenId = 1; tokenId <= tokensCreated; tokenId++) {
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

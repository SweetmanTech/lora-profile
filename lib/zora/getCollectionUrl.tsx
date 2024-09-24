import { Address } from 'viem'

const getCollectionUrl = (
  chainName: any,
  collectionAddress: Address,
  isTestnet: boolean,
  tokenId: number | undefined = undefined,
) => {
  return `https://${isTestnet ? 'testnet.' : ''}zora.co/collect/${chainName}:${collectionAddress}/${tokenId || ''}`
}

export default getCollectionUrl

import { Address } from 'viem'

const getCollectionUrl = (
  chainName: any,
  collectionAddress: Address,
  isTestnet: boolean,
  tokenId: string | undefined = undefined,
) => {
  return `https://${isTestnet ? 'testnet.' : ''}zora.co/collect/${chainName}:${collectionAddress}/${tokenId || ''}`
}

export default getCollectionUrl

import { Address } from 'viem'

const getCollectionUrl = (chainName: any, collectionAddress: Address, isTestnet: boolean) => {
  return `https://${isTestnet ? 'testnet.' : ''}zora.co/collect/${chainName}:${collectionAddress}/1`
}

export default getCollectionUrl

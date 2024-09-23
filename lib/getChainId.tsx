import { base, baseSepolia, zora, zoraSepolia } from 'viem/chains'

const getChainId = (chainName) => {
  switch (chainName) {
    case 'zora':
      return zora.id
    case 'zoraSepolia':
      return zoraSepolia.id
    case 'base':
      return base.id
    case 'baseSepolia':
      return baseSepolia.id
    default:
      return base.id
  }
}

export default getChainId

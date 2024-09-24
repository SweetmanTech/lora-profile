import { base, baseSepolia, zora, zoraSepolia } from 'viem/chains'

const getZoraChainName = (chainId: number) => {
  switch (chainId) {
    case baseSepolia.id:
      return 'bsep'
    case zoraSepolia.id:
      return 'zsep'
    case base.id:
      return 'base'
    case zora.id:
      return 'zora'
    default:
      return 'base'
  }
}

export default getZoraChainName

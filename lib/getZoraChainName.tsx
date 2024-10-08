import { base, baseSepolia, zora, zoraSepolia } from 'viem/chains'

const getZoraChainName = (chainId: number) => {
  switch (chainId) {
    case zora.id:
      return 'zora'
    case zoraSepolia.id:
      return 'zsep'
    case base.id:
      return 'base'
    case baseSepolia.id:
      return 'bsep'
    default:
      return 'base'
  }
}

export default getZoraChainName

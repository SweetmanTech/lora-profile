import { base, baseSepolia, zora, zoraSepolia } from 'viem/chains'

const isTestnet = (chainId: number) => {
  switch (chainId) {
    case baseSepolia.id:
    case zoraSepolia.id:
      return true
    case base.id:
    case zora.id:
      return false
    default:
      return true
  }
}

export default isTestnet

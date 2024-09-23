import {
  goerli,
  mainnet,
  optimism,
  polygon,
  polygonMumbai,
  sepolia,
  baseSepolia,
  optimismSepolia,
  base,
  zora,
  zoraSepolia,
} from 'viem/chains'

const getViemNetwork = (chainId: number) => {
  switch (chainId) {
    case mainnet.id:
      return mainnet
    case polygon.id:
      return polygon
    case base.id:
      return base
    case optimism.id:
      return optimism
    case sepolia.id:
      return sepolia
    case baseSepolia.id:
      return baseSepolia
    case optimismSepolia.id:
      return optimismSepolia
    case zora.id:
      return zora
    case zoraSepolia.id:
      return zoraSepolia
    default:
      return mainnet
  }
}

export default getViemNetwork

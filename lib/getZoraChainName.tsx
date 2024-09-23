const getZoraChainName = (chainName) => {
  switch (chainName) {
    case 'zora':
      return 'zora'
    case 'zoraSepolia':
      return 'zsep'
    case 'base':
    case 'mainnet':
      return 'base'
    case 'baseSepolia':
    case 'sepolia':
      return 'bsep'
    default:
      return 'base'
  }
}

export default getZoraChainName

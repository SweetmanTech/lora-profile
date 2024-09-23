const getZoraChainName = (chainName: string) => {
  switch (chainName) {
    case 'zora':
      return 'zora'
    case 'zoraSepolia':
      return 'zsep'
    case 'base':
      return 'base'
    case 'baseSepolia':
      return 'bsep'
    default:
      return 'base'
  }
}

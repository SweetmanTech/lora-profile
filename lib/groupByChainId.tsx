import { COLLECTION_TYPE } from '@/types/collection'

const groupByChainId = (collection: COLLECTION_TYPE[]) => {
  return collection.reduce(
    (acc, item) => {
      const { chainId } = item
      if (!acc[chainId]) {
        acc[chainId] = []
      }
      acc[chainId].push(item)
      return acc
    },
    {} as { [key: number]: COLLECTION_TYPE[] },
  )
}

export default groupByChainId

import { METADATA_TYPE } from '@/types/metadata'
import { useEffect, useState } from 'react'
import { Address } from 'viem'
import { useQuery } from '@tanstack/react-query'
import { COLLECTION_TYPE } from '@/types/collection'
import getCollectionMetadatas from '@/lib/getCollectionMetadatas'
import getTokenMetadatas from '@/lib/getTokenMetadatas'

const useCollections = (creatorAddress: Address) => {
  const [metadataOfCollection, setMetadataOfCollection] = useState<
    (METADATA_TYPE & COLLECTION_TYPE)[] | null
  >([])
  const [metadataOfTokens, setMetadataOfTokens] = useState<
    (METADATA_TYPE & COLLECTION_TYPE & { tokenId: number })[]
  >([])
  const [loading, setLoading] = useState(true)

  const getCollections = async (): Promise<COLLECTION_TYPE[]> => {
    const response = await fetch(`/api/collections?address=${creatorAddress}`)
    const data = await response.json()
    return data.collections
  }

  const { data: collections } = useQuery({
    queryKey: ['getCollections'],
    queryFn: getCollections,
  })

  useEffect(() => {
    const init = async () => {
      setLoading(true)
      let metadata = await getCollectionMetadatas(collections)
      setMetadataOfCollection(metadata)
      metadata = await getTokenMetadatas(collections)
      setMetadataOfTokens(metadata)
      setLoading(false)
    }

    if (!collections) return
    init()
  }, [collections])

  return {
    metadataOfCollection,
    metadataOfTokens,
    collections,
    loading,
  }
}

export default useCollections

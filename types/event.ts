import { Address } from 'viem'

export type EVENT_TYPE = {
  event: string
  address: Address
  timestamp: string
  poiints: number
  metadata: {
    user: Address
    tokenId: string
    uniqueId: string
    collection: Address
    blockNumber: `0x${string}`
    permissions: string
    transactionHash: `0x${string}`
  }
}

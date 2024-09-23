import { Address } from 'viem'

const getEvents = async (address: Address) => {
  const response = await fetch(`https://api.myco.wtf/api/zora/tokens?creatorAddress=${address}`)
  const data = await response.json()
  return data.tokens
}

export default getEvents

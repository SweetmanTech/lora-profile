import { Address } from 'viem'

const getEvents = async (address: Address) => {
  const response = await fetch(`https://api.myco.wtf/api/zora/tokens?creatorAddress=${address}`)
  const data = await response.json()
  const events = data.tokens.reduce((acc, event) => {
    const { collection, tokenId } = event.metadata
    const key = `${collection}-${tokenId}`

    if (!acc[key]) {
      acc[key] = event
    }

    acc[key].points += event.points

    return acc
  }, {})

  return Object.values(events)
}

export default getEvents

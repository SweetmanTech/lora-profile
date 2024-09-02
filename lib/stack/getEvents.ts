import { Address } from 'viem'
import stackClient from './client'

const getEvents = async (address: Address) => {
  const events = await stackClient.getEvents({
    address,
  })

  return events || []
}

export default getEvents

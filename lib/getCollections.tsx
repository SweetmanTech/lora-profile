import { EVENT_TYPE } from '@/types/event'

const getCollections = (events: EVENT_TYPE[]) => {
  const aggregated = events.reduce((acc, item) => {
    const collection = item.metadata.collection

    if (acc[collection]) {
      acc[collection].points += item.points
    } else {
      acc[collection] = item
    }

    return acc
  }, {})

  return Object.values(aggregated)
}

export default getCollections

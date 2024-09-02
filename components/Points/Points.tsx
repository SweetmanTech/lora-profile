'use client'
import { usePoints } from '@/providers/PointsProvider'
import Point from './Point'

const Points = () => {
  const { events } = usePoints()

  return (
    <div>
      {events.map((event, index) => (
        <Point key={index} event={event} />
      ))}
    </div>
  )
}

export default Points

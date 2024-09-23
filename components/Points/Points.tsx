'use client'
import { usePoints } from '@/providers/PointsProvider'
import Point from './Point'

const Points = () => {
  const { events } = usePoints()

  return (
    <div className="grid grid-cols-3 gap-2 overflow-y-auto max-h-[420px]">
      {events.map((event, index) => (
        <Point key={index} event={event} />
      ))}
    </div>
  )
}

export default Points

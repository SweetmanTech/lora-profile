'use client'
import { usePoints } from '@/providers/PointsProvider'
import Point from './Point'

const Points = () => {
  const { collections } = usePoints()

  return (
    <div className="grid grid-cols-3 gap-2 overflow-y-auto max-h-[420px]">
      {collections.tokens.map((token, index) => (
        <Point key={index} token={token} />
      ))}
    </div>
  )
}

export default Points

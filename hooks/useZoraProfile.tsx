import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

const useZoraProfile = () => {
  const { creator } = useParams()
  console.log('SWEETS creator', creator)

  const { data, isSuccess } = useQuery({
    queryKey: [`creator-${creator}`],
    queryFn: () => fetch(`/api/creator/${creator}`).then((res) => res.json()),
  })
  console.log('SWEETS DATA', data)

  return { data: data?.creator, isSuccess }
}
export default useZoraProfile

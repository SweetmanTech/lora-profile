import { useQuery } from '@tanstack/react-query'
import { useParams } from 'next/navigation'

const useZoraProfile = () => {
  const { creator } = useParams()
  const { data, isSuccess } = useQuery({
    queryKey: [`creator-${creator}`],
    queryFn: () => fetch(`/api/creator/${creator}`).then((res) => res.json()),
  })
  return { creator: data?.creator, isSuccess }
}
export default useZoraProfile

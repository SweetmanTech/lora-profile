import ProfilePage from '@/components/ProfilePage'
import getCollections from '@/lib/stack/getCollections'
import fetchProfile from '@/lib/zora/fetchProfile'
import { PointsProvider } from '@/providers/PointsProvider'
import { ZoraProfileProvider } from '@/providers/ZoraProfileProvider'
import _ from 'lodash'
import { Address } from 'viem'

export default async function Creator({ params }) {
  const creator = _.get(params, ['creator'])
  const profile = await fetchProfile(creator)
  const creatorAddress = profile.address
  const collections = await getCollections(creatorAddress as Address)

  return (
    <ZoraProfileProvider profile={profile}>
      <PointsProvider collections={collections}>
        <ProfilePage />
      </PointsProvider>
    </ZoraProfileProvider>
  )
}

export const dynamic = 'force-dynamic'

import ProfilePage from '@/components/ProfilePage'
import getEvents from '@/lib/stack/getEvents'
import fetchProfile from '@/lib/zora/fetchProfile'
import { PointsProvider } from '@/providers/PointsProvider'
import { ZoraProfileProvider } from '@/providers/ZoraProfileProvider'
import _ from 'lodash'

export default async function Creator({ params }) {
  const creator = _.get(params, ['creator'])
  const profile = await fetchProfile(creator)

  const creatorAddress = profile.address
  const events = await getEvents(creatorAddress)

  return (
    <ZoraProfileProvider profile={profile}>
      <PointsProvider events={events}>
        <ProfilePage />
      </PointsProvider>
    </ZoraProfileProvider>
  )
}

import ProfilePage from '@/components/ProfilePage'
import fetchProfile from '@/lib/zora/fetchProfile'
import { ZoraProfileProvider } from '@/providers/ZoraProfileProvider'
import _ from 'lodash'

export default async function Creator({ params }) {
  const creator = _.get(params, ['creator'])
  const profile = await fetchProfile(creator)

  return (
    <ZoraProfileProvider profile={profile}>
      <ProfilePage />
    </ZoraProfileProvider>
  )
}

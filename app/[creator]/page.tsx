import ProfilePage from '@/components/ProfilePage'
import fetchProfile from '@/lib/zora/fetchProfile'
import CollectionProvider from '@/providers/CollectionProvider'
import { TabsProvider } from '@/providers/TabsProvider'
import { ZoraProfileProvider } from '@/providers/ZoraProfileProvider'
import _ from 'lodash'

export default async function Creator({ params }) {
  const creator = _.get(params, ['creator'])
  const profile = await fetchProfile(creator)
  const creatorAddress = profile.address

  return (
    <TabsProvider>
      <ZoraProfileProvider profile={profile}>
        <CollectionProvider creatorAddress={creatorAddress}>
          <ProfilePage />
        </CollectionProvider>
      </ZoraProfileProvider>
    </TabsProvider>
  )
}

export const dynamic = 'force-dynamic'

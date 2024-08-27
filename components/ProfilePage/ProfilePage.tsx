'use client'

import { useZoraProfileProvider } from '@/providers/ZoraProfileProvider'
import ProfileHeader from './ProfileHeader'
import ProfileCollections from './ProfileCollections'

const ProfilePage = () => {
  const { creator } = useZoraProfileProvider()

  return (
    <div className="flex flex-col min-h-screen mt-11 md:max-w-[75%]">
      {creator && <ProfileHeader />}
    </div>
  )
}

export default ProfilePage

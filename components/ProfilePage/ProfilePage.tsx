'use client'

import Points from '@/components/Points'
import ProfileHeader from './ProfileHeader'
import Collections from './Collections'
import Tabs from './Tabs'

const ProfilePage = () => {
  return (
    <div className="flex flex-col h-screen md:max-w-3xl pt-10">
      <ProfileHeader />
      <Tabs />
      <Collections />
      <Points />
    </div>
  )
}

export default ProfilePage

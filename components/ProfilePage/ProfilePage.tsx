import Points from '@/components/Points'
import ProfileHeader from './ProfileHeader'
import Collections from './Collections'

const ProfilePage = () => {
  return (
    <div className="flex flex-col min-h-screen mt-11 md:max-w-[75%]">
      <ProfileHeader />
      <Collections />
      <Points />
    </div>
  )
}

export default ProfilePage

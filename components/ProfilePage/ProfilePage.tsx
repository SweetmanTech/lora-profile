import Points from '@/components/Points'
import ProfileHeader from './ProfileHeader'
import Collections from './Collections'

const ProfilePage = () => {
  return (
    <div className="flex flex-col h-screen md:max-w-[75%] mt-11">
      <ProfileHeader />
      <Collections />
      <Points />
    </div>
  )
}

export default ProfilePage

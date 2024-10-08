'use client'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import truncate from '@/lib/truncate'
import { useZoraProfileProvider } from '@/providers/ZoraProfileProvider'

const ProfileHeader = () => {
  const creator = useZoraProfileProvider()

  return (
    <header className="px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between">
        <div className="flex items-start md:items-center space-x-4">
          <Avatar className="h-20 w-20 md:h-28 md:w-28">
            <AvatarImage src={creator.avatar} alt="User avatar" className="object-cover" />
            <AvatarFallback>ZO</AvatarFallback>
          </Avatar>
          <div>
            <h1 className="text-3xl md:text-4xl font-bold">{creator.displayName}</h1>
            <p className="text-sm text-gray-500">{truncate(creator.address)}</p>
            <p className="text-md md:text-lg text-gray-500">{creator.description}</p>
            <div className="flex space-x-4">
              <span>{creator.totalFollowers} followers</span>
              <span>{creator.totalFollowing} following</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-between"></div>
    </header>
  )
}

export default ProfileHeader

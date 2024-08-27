'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/Button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs'
import { Card, CardContent } from '@/components/ui/Card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/Avatar'
import { Search, Plus, Bell } from 'lucide-react'

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState('created')

  const tokens = [
    { id: 1, name: 'Limitless', image: '/placeholder.svg?height=100&width=100' },
    { id: 2, name: 'Onchain Summit', image: '/placeholder.svg?height=100&width=100' },
    { id: 3, name: 'Party x Zora Collab', image: '/placeholder.svg?height=100&width=100' },
    { id: 4, name: 'shipping', image: '/placeholder.svg?height=100&width=100' },
    { id: 5, name: 'Kismet Casa Mañana', image: '/placeholder.svg?height=100&width=100' },
    { id: 6, name: 'MINT ALL', image: '/placeholder.svg?height=100&width=100' },
  ]

  return (
    <div className="flex flex-col min-h-screen mt-11">
      <header className="border-b border-gray-200 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/placeholder.svg?height=40&width=40" alt="User avatar" />
              <AvatarFallback>ZU</AvatarFallback>
            </Avatar>
            <div>
              <h1 className="text-xl font-bold">zora_user</h1>
              <p className="text-sm text-gray-500">0x1234...5678</p>
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center justify-between">
          <div className="flex space-x-4">
            <span>457 followers</span>
            <span>149 following</span>
          </div>
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Follower 1" />
              <AvatarFallback>F1</AvatarFallback>
            </Avatar>
            <Avatar className="h-6 w-6">
              <AvatarImage src="/placeholder.svg?height=24&width=24" alt="Follower 2" />
              <AvatarFallback>F2</AvatarFallback>
            </Avatar>
            <span className="text-sm text-gray-500">Followed by aneri, j919 and 36 others</span>
          </div>
        </div>
      </header>
      <main className="flex-grow px-4 py-8 sm:px-6 lg:px-8">
        <Tabs defaultValue="created" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="created" onClick={() => setActiveTab('created')}>
              Created
            </TabsTrigger>
            <TabsTrigger value="collected" onClick={() => setActiveTab('collected')}>
              Collected
            </TabsTrigger>
          </TabsList>
          <TabsContent value="created" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {tokens.map((token) => (
                <Card key={token.id} className="overflow-hidden">
                  <CardContent className="p-0">
                    <img src={token.image} alt={token.name} className="w-full h-40 object-cover" />
                    <div className="p-2">
                      <h3 className="text-sm font-medium">{token.name}</h3>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </TabsContent>
          <TabsContent value="collected" className="mt-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
              {/* Add collected tokens here */}
              <Card className="overflow-hidden">
                <CardContent className="p-0">
                  <img
                    src="/placeholder.svg?height=160&width=160"
                    alt="Collected Token"
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-2">
                    <h3 className="text-sm font-medium">Collected Token</h3>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
      <footer className="border-t border-gray-200 p-4">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Bell className="h-5 w-5" />
            </Button>
          </div>
          <Button size="icon">
            <Plus className="h-5 w-5" />
          </Button>
        </div>
      </footer>
    </div>
  )
}

export default ProfilePage

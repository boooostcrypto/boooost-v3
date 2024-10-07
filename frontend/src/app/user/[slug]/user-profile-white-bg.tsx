import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Twitter, Globe, Github } from "lucide-react"

export default function UserProfile() {
  const [isFollowing, setIsFollowing] = useState(false)

  const handleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  return (
    <div className="min-h-screen bg-white text-gray-800">
      <div className="container mx-auto p-6">
        <Card className="mb-6 border-none shadow-lg bg-gradient-to-r from-blue-500 to-purple-600">
          <CardContent className="pt-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
              <Avatar className="w-24 h-24 border-4 border-white">
                <AvatarImage src="/placeholder.svg?height=96&width=96" alt="@smithii" />
                <AvatarFallback>SM</AvatarFallback>
              </Avatar>
              <div className="flex-1 text-center md:text-left">
                <h1 className="text-3xl font-bold text-white mb-2">Smithii</h1>
                <p className="text-blue-100 mb-4">Anime enthusiast and voice actor</p>
                <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-4">
                  <Badge variant="secondary" className="bg-white text-blue-600">Voice Actor</Badge>
                  <Badge variant="secondary" className="bg-white text-purple-600">Content Creator</Badge>
                  <Badge variant="secondary" className="bg-white text-indigo-600">Anime DAO Member</Badge>
                </div>
                <div className="flex justify-center md:justify-start gap-4 mb-4">
                  <a href="https://twitter.com/smithii" className="text-white hover:text-blue-200 transition-colors">
                    <Twitter className="w-6 h-6" />
                  </a>
                  <a href="https://smithii.com" className="text-white hover:text-blue-200 transition-colors">
                    <Globe className="w-6 h-6" />
                  </a>
                  <a href="https://github.com/smithii" className="text-white hover:text-blue-200 transition-colors">
                    <Github className="w-6 h-6" />
                  </a>
                </div>
                <Button 
                  onClick={handleFollow} 
                  variant={isFollowing ? "secondary" : "default"}
                  className={`${isFollowing ? 'bg-white text-blue-600 hover:bg-blue-100' : 'bg-blue-100 text-blue-600 hover:bg-blue-200'} transition-colors`}
                >
                  {isFollowing ? 'Following' : 'Follow'}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            { title: "Recent Activity", items: [
              { avatar: "AC", title: "Commented on a bounty", subtitle: "2 hours ago", badge: "+100 ANIME"},
              { avatar: "AC", title: "Submitted a bounty entry", subtitle: "1 day ago", badge: "+100 ANIME"},
              { avatar: "AC", title: "Joined a new community", subtitle: "3 days ago", badge: "+100 ANIME" },
            ]},
            { title: "Joined Communities", items: [
              { avatar: "AD", title: "Anime DAO", subtitle: "Joined 6 months ago" },
              { avatar: "VA", title: "Voice Actors United", subtitle: "Joined 1 year ago" },
            ]},
            { title: "Token Activity", items: [
              { avatar: "AT", title: "Bought ANIME Tokens", subtitle: "1 week ago", badge: "+100 ANIME" },
              { avatar: "VT", title: "Sold VOICE Tokens", subtitle: "2 weeks ago", badge: "-50 VOICE" },
            ]},
            { title: "Bounty Activity", items: [
              { avatar: "B1", title: "Anime Voice Actor Community Promotion", subtitle: "Submitted 3 days ago", badge: "In Review" },
              { avatar: "B2", title: "Character Voice Design Challenge", subtitle: "Completed 2 weeks ago", badge: "Won" },
            ]},
          ].map((section, index) => (
            <Card key={index} className="border shadow-md hover:shadow-lg transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-500 to-purple-600">
                <CardTitle className="text-xl font-bold text-white">{section.title}</CardTitle>
              </CardHeader>
              <CardContent className="bg-white">
                <ul className="space-y-4">
                  {section.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-center justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="bg-blue-100 text-blue-600">
                          <AvatarFallback>{item.avatar}</AvatarFallback>
                        </Avatar>
                        <div>
                          <p className="font-semibold text-gray-800">{item.title}</p>
                          <p className="text-sm text-gray-500">{item.subtitle}</p>
                        </div>
                      </div>
                      {/* {item.badge && (
                        <Badge variant="secondary" className="bg-blue-100 text-blue-600">
                          {item.badge}
                        </Badge>
                      )} */}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
'use client';
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Mic2, Clock, Users, Trophy, ChevronRight, Send, Bell, Globe, Twitter } from "lucide-react"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {  Home } from 'lucide-react'
import Link from 'next/link'

// export default function BountyPage({ backgroundImage = "/placeholder.svg?height=200&width=1200" }) {
export default function BountyPage({ backgroundImage = "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80&quot;" }) {
  const [comments, setComments] = useState([
    { id: 1, author: 'Alice', content: 'This looks like an exciting opportunity!', avatar: '/placeholder.svg?height=40&width=40' },
    { id: 2, author: 'Bob', content: "Can't wait to participate!", avatar: '/placeholder.svg?height=40&width=40' }
  ])
  const [newComment, setNewComment] = useState('')
  const [isSubscribed, setIsSubscribed] = useState(false)

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (newComment.trim()) {
      setComments([...comments, { id: comments.length + 1, author: 'You', content: newComment, avatar: '/placeholder.svg?height=40&width=40' }])
      setNewComment('')
    }
  }

  const handleSubscribe = () => {
    setIsSubscribed(!isSubscribed)
  }

  return (

<div className="space-y-4 bg-white text-gray-800">


<nav className="flex px-4 py-2 bg-white" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li className="inline-flex items-center">
            <Link href="/" className="inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600">
              <Home className="w-4 h-4 mr-2" />
              Home
            </Link>
          </li>
          <li>
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <Link href="/bounties" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                Bounties
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Anime Voice Actor Community</span>
            </div>
          </li>
        </ol>
      </nav>

      <div 
        // className="relative mb-6 rounded-lg overflow-hidden"
        className="relative mb-6  overflow-hidden"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '200px'
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-4">
              <Image src="/placeholder.svg?height=200&width=1200?height=50&width=50" alt="ANIME Token" className="w-12 h-12 rounded-full" width="50" height="50" />
              <h1 className="text-2xl font-bold text-white">Anime Voice Actor Community Promotion Bounty</h1>
            </div>
            <div className="flex items-center space-x-4 text-white">
              <span>by Smithii</span>
              <span className="text-gray-300">|</span>
              <Badge variant="secondary" className="bg-blue-500 text-white">Anime DAO Community</Badge>
              <span className="text-gray-300">|</span>
              <Badge variant="secondary" className="bg-green-500 text-white">Submissions Open</Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[300px,1fr] gap-6">
        <Card className="col-span-1">
          <CardHeader>
            <CardTitle>Submission Guidelines</CardTitle>
            <CardDescription>Follow these guidelines to create your promotional content</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <ul className="list-disc pl-5 space-y-2">
              <li>Create engaging content about our anime voice actor community</li>
              <li>Post your content on X (Twitter) using the hashtag #AnimeVoiceActorCommunity</li>
              <li>Highlight the unique aspects of our community</li>
              <li>Encourage others to join and participate</li>
              <li>Be creative and authentic in your approach</li>
            </ul>
            <div className="pt-4">
              <h3 className="font-semibold mb-2">How to Submit:</h3>
              <p>After posting on X, fill out the submission form with your post link and a brief description of your promotional strategy.</p>
            </div>
            <div className="space-y-2">
              <h3 className="font-semibold">Required Skills:</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">X (Twitter) Proficiency</Badge>
                <Badge variant="secondary">Content Marketing</Badge>
              </div>
            </div>
            <Button className="w-full mt-4">
              <Mic2 className="mr-2 h-4 w-4" /> Submit Your Entry
            </Button>
            <div className="pt-4 border-t mt-4">
              <h3 className="font-semibold mb-2">Contact Bounty Creator:</h3>
              <p>Reach out if you have any questions about this listing</p>
              <a href="/user/smithii" className="text-blue-500 hover:underline">Visit Smithii's profile</a>
            </div>
          </CardContent>
        </Card>
        
        <div className="col-span-1 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="flex -space-x-2">
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/placeholder.svg??height=32&width=32" alt="@user1" />
                  <AvatarFallback>U1</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user2" />
                  <AvatarFallback>U2</AvatarFallback>
                </Avatar>
                <Avatar className="border-2 border-white">
                  <AvatarImage src="/placeholder.svg?height=32&width=32" alt="@user3" />
                  <AvatarFallback>U3</AvatarFallback>
                </Avatar>
              </div>
              <span className="text-sm text-gray-500">3 subscribers</span>
            </div>
            <Button 
              onClick={handleSubscribe}
              variant={isSubscribed ? "secondary" : "default"}
              className="flex items-center space-x-2"
            >
              <Bell className="w-4 h-4" />
              <span>{isSubscribed ? 'Subscribed' : 'Subscribe'}</span>
            </Button>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Bounty Details</CardTitle>
              <CardDescription>Promote our anime voice actor community and earn ANIME tokens!</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Trophy className="w-5 h-5 text-yellow-500" />
                <span className="font-semibold">Reward:</span>
                <span>100 ANIME tokens</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Deadline:</span>
                <span>1 week from now</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-green-500" />
                <span className="font-semibold">Winners:</span>
                <span>10 high-quality submissions</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Comments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {comments.map(comment => (
                  <div key={comment.id} className="flex space-x-4">
                    <Avatar>
                      <AvatarImage src={comment.avatar} alt={comment.author} />
                      <AvatarFallback>{comment.author[0]}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{comment.author}</p>
                      <p>{comment.content}</p>
                    </div>
                  </div>
                ))}
              </div>
              <form onSubmit={handleCommentSubmit} className="mt-4">
                <Textarea
                  placeholder="Add a comment..."
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  className="mb-2"
                />
                <Button type="submit">
                  <Send className="mr-2 h-4 w-4" /> Post Comment
                </Button>
              </form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Community Details</CardTitle>
              <CardDescription>Learn more about the Anime DAO Community</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-blue-500" />
                <span className="font-semibold">Members:</span>
                <span>5,000+</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-5 h-5 text-green-500" />
                <span className="font-semibold">Website:</span>
                <a href="https://animedao.com" className="text-blue-500 hover:underline">https://animedao.com</a>
              </div>
              <div className="flex items-center space-x-2">
                <Twitter className="w-5 h-5 text-sky-500" />
                <span className="font-semibold">Twitter:</span>
                <a href="https://twitter.com/AnimeDAO" className="text-blue-500 hover:underline">@AnimeDAO</a>
              </div>
              <div>
                <h3 className="font-semibold mb-2">About:</h3>
                <p>Anime DAO is a decentralized community of anime enthusiasts, creators, and voice actors. We aim to revolutionize the anime industry through blockchain technology and community-driven projects.</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
 )
}
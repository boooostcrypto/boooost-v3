/* eslint-disable react/no-unescaped-entities */

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, Zap, Award, DollarSign, Droplet, MessageSquare, PlusCircle } from "lucide-react"
import { Progress } from "@/components/ui/progress"
// import { Users, Zap, Info, Award, DollarSign, Droplet, MessageSquare } from "lucide-react"
// import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import Link from "next/link"

const communities = [
  { 
    id: 1, 
    name: "Anime Enthusiasts", 
    description: "Discuss and celebrate Japanese animation and manga", 
    currentSol: 150, 
    targetSol: 200, 
    members: 75, 
    marketCap: 50000,
    liquidity: 25000,
    replies: 320,
    image: "https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 2, 
    name: "Mountain Explorers", 
    description: "Connect with fellow hikers and plan mountain adventures", 
    currentSol: 80, 
    targetSol: 150, 
    members: 50, 
    marketCap: 30000,
    liquidity: 15000,
    replies: 180,
    image: "https://images.unsplash.com/photo-1551632811-561732d1e306?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 3, 
    name: "Blockchain Study Group", 
    description: "Learn and discuss blockchain technology and its applications", 
    currentSol: 120, 
    targetSol: 180, 
    members: 60, 
    marketCap: 75000,
    liquidity: 40000,
    replies: 450,
    image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 4, 
    name: "Digital Nomad Educators", 
    description: "Community for teachers exploring educational opportunities abroad", 
    currentSol: 90, 
    targetSol: 120, 
    members: 40, 
    marketCap: 25000,
    liquidity: 12000,
    replies: 210,
    image: "https://images.unsplash.com/photo-1571260899304-425eee4c7efc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 5, 
    name: "Urban Gardeners", 
    description: "Share tips and experiences about growing plants in city environments", 
    currentSol: 70, 
    targetSol: 100, 
    members: 55, 
    marketCap: 20000,
    liquidity: 10000,
    replies: 280,
    image: "https://images.unsplash.com/photo-1466692476868-aef1dfb1e735?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
  { 
    id: 6, 
    name: "Indie Game Developers", 
    description: "Collaborate and support independent game creation projects", 
    currentSol: 200, 
    targetSol: 250, 
    members: 80, 
    marketCap: 100000,
    liquidity: 50000,
    replies: 520,
    image: "https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
  },
]

const recentBounties = [
  { id: 1, title: "Create a DeFi Dashboard", reward: 50, community: "Blockchain Study Group" },
  { id: 2, title: "Design Anime-Inspired NFT Collection", reward: 75, community: "Anime Enthusiasts" },
  { id: 3, title: "Develop Hiking Trail Finder App", reward: 100, community: "Mountain Explorers" },
  { id: 4, title: "Build Online Course Platform", reward: 150, community: "Digital Nomad Educators" },
  { id: 5, title: "Create Urban Gardening Guide", reward: 30, community: "Urban Gardeners" },
]

export default function CommunityAndBountyList() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Featured Communities and Bounties</h2>
        <p className="text-center text-gray-600 mb-4">
          Discover communities, support their growth, and participate in exciting bounties!
        </p>
        {/* <p className="text-center text-gray-600 mb-12 flex items-center justify-center">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <Info className="h-4 w-4 mr-2" />
                Fair Token Launch
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">When a community reaches its SOL goal, liquidity is automatically created on a DEX, ensuring a fair token launch for the community.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </p> */}
        <div className="flex flex-col xl:flex-row gap-8">
          <div className="xl:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {communities.map((community) => (
              <Link href={`/communities/${community.id}`} key={community.id} className="block">
                <Card className="flex flex-col overflow-hidden h-full transition-transform duration-200 hover:scale-105">
                  <div 
                    className="h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${community.image})` }}
                  />
                  <CardHeader className="bg-white bg-opacity-90">
                    <CardTitle>{community.name}</CardTitle>
                    <CardDescription>{community.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow bg-white bg-opacity-90">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Progress</span>
                      <span className="text-sm font-medium">{community.currentSol} / {community.targetSol} SOL</span>
                    </div>
                    <Progress value={(community.currentSol / community.targetSol) * 100} className="h-2" />
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center text-gray-500">
                        <Users className="mr-2 h-4 w-4" />
                        <span>{community.members} members</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>{community.replies} replies</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <DollarSign className="mr-2 h-4 w-4" />
                        <span>${community.marketCap.toLocaleString()} Cap</span>
                      </div>
                      <div className="flex items-center text-gray-500">
                        <Droplet className="mr-2 h-4 w-4" />
                        <span>${community.liquidity.toLocaleString()} Liq</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-white">
                    <Button className="w-full">
                      <Zap className="mr-2 h-4 w-4" /> Support
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="xl:w-1/4">
            <Card className="mb-8">
              <CardHeader>
                <CardTitle>How it works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2">
                  <li>Choose a community you're interested in</li>
                  <li>Support the community by contributing SOL</li>
                  <li>When the funding goal is reached, a fair token launch occurs</li>
                  <li>Participate in bounties to earn rewards and grow the community</li>
                </ol>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create a New Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Have a great idea for a new community? Start your own and gather support!</p>
                <Button className="w-full">
                  <PlusCircle className="mr-2 h-4 w-4" /> Create Community
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Award className="mr-2 h-5 w-5" />
                  Recent Bounties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recentBounties.map((bounty) => (
                    <li key={bounty.id} className="border-b pb-2 last:border-b-0">
                      <Link href={`/bounty/${bounty.id}`} className="block hover:bg-gray-50 rounded p-2 transition-colors duration-200">
                        <h3 className="font-semibold text-sm">{bounty.title}</h3>
                        <p className="text-sm text-gray-600">{bounty.community}</p>
                        <p className="text-sm font-medium text-green-600">{bounty.reward} SOL Reward</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  View All Bounties
                </Button>
              </CardFooter>
            </Card>

          </div>
        </div>
      </div>
    </section>
  )
}
/* eslint-disable react/no-unescaped-entities */
'use client';
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Users, Zap, Award, DollarSign, Droplet, MessageSquare, PlusCircle, Tag } from "lucide-react"
import { Badge } from "@/components/ui/badge"
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
    category: "Entertainment",
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
    category: "Outdoor",
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
    category: "Technology",
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
    category: "Education",
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
    category: "Lifestyle",
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
    category: "Gaming",
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
    <section className="py-12 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-[#334155]">Featured Communities and Bounties</h2>
        <p className="text-center text-[#334155] mb-12">
          Discover communities, support their growth, and participate in exciting bounties!
        </p>
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3 xl:w-3/4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {communities.map((community) => (
              <Link href={`/communities/${community.id}`} key={community.id} className="block h-full">
                <Card className="flex flex-col h-full overflow-hidden transition-transform duration-200 hover:scale-105 bg-[#ffffff] border-[#a3caed] shadow-md">
                  <div 
                    className="h-48 bg-cover bg-center relative"
                    style={{ backgroundImage: `url(${community.image})` }}
                  >
                    <Badge className="absolute top-2 right-2 bg-[#6366f1] text-white">
                      <Tag className="w-3 h-3 mr-1" />
                      {community.category}
                    </Badge>
                  </div>
                  <CardHeader className="bg-[#ffffff]">
                    <CardTitle className="text-[#334155]">{community.name}</CardTitle>
                    <CardDescription className="text-[#334155]">{community.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="flex-grow bg-[#ffffff]">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-[#334155]">Progress</span>
                      <span className="text-sm font-medium text-[#334155]">{community.currentSol} / {community.targetSol} SOL</span>
                    </div>
                    {/* <Progress 
                      value={(community.currentSol / community.targetSol) * 100} 
                      className="h-2 bg-[#ffffff]" 
                      indicatorClassName="bg-[#6366f1]" 
                    /> */}
                       <Progress 
                      value={(community.currentSol / community.targetSol) * 100} 
                      className="h-2 bg-[#ffffff]" 
                    />
                    <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
                      <div className="flex items-center text-[#334155]">
                        <Users className="mr-2 h-4 w-4" />
                        <span>{community.members} members</span>
                      </div>
                      <div className="flex items-center text-[#334155]">
                        <MessageSquare className="mr-2 h-4 w-4" />
                        <span>{community.replies} replies</span>
                      </div>
                      <div className="flex items-center text-[#334155]">
                        <DollarSign className="mr-2 h-4 w-4" />
                        <span>${community.marketCap.toLocaleString()} Cap</span>
                      </div>
                      <div className="flex items-center text-[#334155]">
                        <Droplet className="mr-2 h-4 w-4" />
                        <span>${community.liquidity.toLocaleString()} Liq</span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="bg-[#ffffff] mt-auto">
                    <Button className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-[#ffffff]">
                      <Zap className="mr-2 h-4 w-4" /> Support
                    </Button>
                  </CardFooter>
                </Card>
              </Link>
            ))}
          </div>
          <div className="lg:w-1/3 xl:w-1/4 space-y-8">
            <Card className="bg-[#ffffff] border-[#a3caed] shadow-md">
              <CardHeader>
                <CardTitle className="text-[#334155]">How it works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2 text-[#334155]">
                  <li>Choose a community you're interested in</li>
                  <li>Support the community by contributing SOL</li>
                  <li>When the funding goal is reached, a fair token launch occurs</li>
                  <li>Participate in bounties to earn rewards and grow the community</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="bg-[#ffffff] border-[#a3caed] shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-[#334155]">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create a New Community
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-[#334155]">Have a great idea for a new community? Start your own and gather support!</p>
                <Button className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-[#ffffff]">
                  
                  <PlusCircle className="mr-2 h-4 w-4" /> 
                  <Link href="/communities/create">
                    Create Community
                  </Link>
                </Button>
              </CardContent>
            </Card>
            <Card className="bg-[#ffffff] border-[#a3caed] shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-[#334155]">
                  <Award className="mr-2 h-5 w-5" />
                  Recent Bounties
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-4">
                  {recentBounties.map((bounty) => (
                    <li key={bounty.id} className="border-b border-[#a3caed] pb-2 last:border-b-0">
                      <Link href={`/bounties/${bounty.id}`} className="block hover:bg-[#a3caed] hover:bg-opacity-20 rounded p-2 transition-colors duration-200">
                        <h3 className="font-semibold text-sm text-[#334155]">{bounty.title}</h3>
                        <p className="text-sm text-[#334155]">{bounty.community}</p>
                        <p className="text-sm font-medium text-[#6366f1]">{bounty.reward} SOL Reward</p>
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-[#ffffff]">
                  <Link href="/bounties">
                  View All Bounties
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
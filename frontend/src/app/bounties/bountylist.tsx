'use client';
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { PlusCircle, ArrowRight } from "lucide-react"
// import { Award, PlusCircle, ArrowRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const bounties = [
  { 
    id: 1, 
    title: "Create a DeFi Dashboard", 
    reward: 500, 
    community: "Blockchain Study Group",
    communityToken: "BSG",
    tokenIcon: "/images/dummy_token_icon.png",
    tags: ["Development", "Design"]
  },
  { 
    id: 2, 
    title: "Design Anime-Inspired NFT Collection", 
    reward: 1000, 
    community: "Anime Enthusiasts",
    communityToken: "ANI",
    tokenIcon: "/images/dummy_token_icon.png",
    tags: ["Design", "NFT"]
  },
  { 
    id: 3, 
    title: "Develop Hiking Trail Finder App", 
    reward: 750, 
    community: "Mountain Explorers",
    communityToken: "HIKE",
    tokenIcon: "/images/dummy_token_icon.png",
    tags: ["Development", "Mobile"]
  },
  { 
    id: 4, 
    title: "Build Online Course Platform", 
    reward: 1500, 
    community: "Digital Nomad Educators",
    communityToken: "EDU",
    tokenIcon: "/images/dummy_token_icon.png",
    tags: ["Development", "Education"]
  },
  { 
    id: 5, 
    title: "Create Urban Gardening Guide", 
    reward: 300, 
    community: "Urban Gardeners",
    communityToken: "GROW",
    tokenIcon: "/images/dummy_token_icon.png",
    tags: ["Writing", "Gardening"]
  },
  { 
    id: 6, 
    title: "Implement AI Chatbot for Community Support", 
    reward: 2000, 
    community: "Tech Innovators",
    communityToken: "TECH",
    tokenIcon: "/images/dummy_token_icon.png",
    tags: ["Development", "AI"]
  },
  { 
    id: 7, 
    title: "Design Sustainable Fashion Lookbook", 
    reward: 800, 
    community: "Eco-Fashion Enthusiasts",
    communityToken: "ECO",
    tokenIcon: "/images/dummy_token_icon.png",
    tags: ["Design", "Fashion"]
  },
  { 
    id: 8, 
    title: "Develop Crypto Portfolio Tracker", 
    reward: 1200, 
    community: "Blockchain Study Group",
    communityToken: "BSG",
    tokenIcon: "/images/dummy_token_icon.png",
    tags: ["Development", "Finance"]
  },
]

export default function BountyList() {
  return (
    <section className="py-12 bg-[#ffffff]">
      <div className="container mx-auto px-4">
        {/* <h2 className="text-3xl font-bold text-center mb-8 text-[#334155]">Bounty List</h2> */}
        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-2/3">
            <Card className="bg-[#ffffff] border-[#a3caed] shadow-md">
              <CardHeader>
                <CardTitle className="text-[#334155]">Available Bounties</CardTitle>
                <CardDescription>Complete tasks and earn community tokens</CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="text-[#334155]">Title</TableHead>
                      <TableHead className="text-[#334155]">Community</TableHead>
                      <TableHead className="text-[#334155]">Tags</TableHead>
                      <TableHead className="text-right text-[#334155]">Reward</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {bounties.map((bounty) => (
                      <TableRow key={bounty.id}>
                        <TableCell className="font-medium text-[#334155]">
                          <Link href={`/bounties/${bounty.id}`} className="hover:text-[#6366f1]">
                            {bounty.title}
                          </Link>
                        </TableCell>
                        <TableCell className="text-[#334155]">{bounty.community}</TableCell>
                        <TableCell>
                          {bounty.tags.map((tag, index) => (
                            <Badge key={index} variant="secondary" className="mr-1 mb-1">
                              {tag}
                            </Badge>
                          ))}
                        </TableCell>
                        <TableCell className="text-right">
                          <div className="flex items-center justify-end">
                            <div className="w-6 h-6 rounded-full overflow-hidden mr-2">
                              <Image
                                src={bounty.tokenIcon}
                                alt={`${bounty.communityToken} icon`}
                                width={24}
                                height={24}
                                className="object-cover"
                              />
                            </div>
                            <span className="text-[#6366f1] font-semibold">
                              {bounty.reward} {bounty.communityToken}
                            </span>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full border-[#6366f1] text-[#6366f1] hover:bg-[#6366f1] hover:text-[#ffffff]" asChild>
                  <Link href="/bounties">
                    View All Bounties <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          </div>
          <div className="lg:w-1/3 space-y-8">
            <Card className="bg-[#ffffff] border-[#a3caed] shadow-md">
              <CardHeader>
                <CardTitle className="text-[#334155]">How It Works</CardTitle>
              </CardHeader>
              <CardContent>
                <ol className="list-decimal list-inside space-y-2 text-[#334155]">
                  <li>Browse available bounties</li>
                  <li>Apply for a bounty that interests you</li>
                  <li>Complete the task as specified</li>
                  <li>Submit your work for review</li>
                  <li>If approved, receive the reward in community tokens</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="bg-[#ffffff] border-[#a3caed] shadow-md">
              <CardHeader>
                <CardTitle className="flex items-center text-[#334155]">
                  <PlusCircle className="mr-2 h-5 w-5" />
                  Create a New Bounty
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4 text-[#334155]">Have a task for the community? Create a new bounty and attract talented individuals!</p>
                <Button className="w-full bg-[#6366f1] hover:bg-[#4f46e5] text-[#ffffff]" asChild>
                  <Link href="/bounties/create">
                    <PlusCircle className="mr-2 h-4 w-4" /> Create Bounty
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
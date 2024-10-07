'use client';
/* eslint-disable react/no-unescaped-entities */
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, UserIcon, CheckCircleIcon } from "lucide-react"
import Image from "next/image"

export default function BountyDetail() {
  return (
    <div className="container mx-auto py-10 px-4 max-w-4xl">
      <Card>
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-3xl font-bold mb-2">Anime-Inspired NFT Design</CardTitle>
              <CardDescription className="text-xl font-semibold text-green-600">
                Reward: 0.5 ETH
              </CardDescription>
            </div>
            <Badge variant="secondary" className="text-lg py-1 px-3">
              Digital Art
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Image
              src="/placeholder.svg?height=50&width=50"
              alt="Otaku Artists logo"
              width={50}
              height={50}
              className="rounded-full"
            />
            <div>
              <h3 className="font-semibold">Posted by</h3>
              <p>Otaku Artists</p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Description</h3>
            <p>
              We're looking for talented artists to design an anime-style NFT collection. Your designs should capture the essence of popular anime aesthetics while bringing a unique twist that stands out in the NFT marketplace.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Submission Requirements</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>A collection of 5-10 unique anime-inspired NFT designs</li>
              <li>High-resolution images (at least 3000x3000 pixels)</li>
              <li>A brief description of the concept behind your collection</li>
              <li>Your artist statement and previous work samples</li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-2">Judging Criteria</h3>
            <ul className="list-disc pl-5 space-y-1">
              <li>Originality and creativity of the designs (40%)</li>
              <li>Quality of artwork and attention to detail (30%)</li>
              <li>Alignment with anime aesthetics (20%)</li>
              <li>Potential appeal in the NFT market (10%)</li>
            </ul>
          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <CalendarIcon className="w-5 h-5 text-gray-500" />
              <span>Deadline: October 15, 2023</span>
            </div>
            <div className="flex items-center space-x-2">
              <UserIcon className="w-5 h-5 text-gray-500" />
              <span>10 submissions so far</span>
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <CheckCircleIcon className="w-5 h-5 text-green-500" />
            <span className="text-green-600 font-semibold">Verified Bounty</span>
          </div>
          <Button size="lg">Apply for this bounty</Button>
        </CardFooter>
      </Card>
    </div>
  )
}
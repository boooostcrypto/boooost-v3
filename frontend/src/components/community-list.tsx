'use client'

import { useEffect, useState } from 'react'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Pencil } from "lucide-react"
import { useToast } from "@/components/ui/use-toast"
import { getAccessToken } from '@privy-io/react-auth'

interface Community {
  id: string;
  name: string;
  description: string;
  coverImage: string | null;
  token: {
    name: string;
    symbol: string;
    logo: string | null;
    initialSupply: string;
    initialPrice: number;
    maxSupply: string;
    reserveRatio: number;
  };
  links: {
    website: string | null;
    twitter: string | null;
    telegram: string | null;
    discord: string | null;
  } | null;
  _count: {
    members: number;
  };
  createdAt: string;
}

export function CommunityList() {
  const [communities, setCommunities] = useState<Community[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const accessToken = await getAccessToken()
        const response = await fetch('/api/users/me/communities', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })

        if (!response.ok) {
          throw new Error('Failed to fetch communities')
        }

        const data = await response.json()
        setCommunities(data)
      } catch (error) {
        console.error('Error fetching communities:', error)
        toast({
          variant: "destructive",
          title: "Error",
          description: "Failed to fetch communities. Please try again.",
        })
      } finally {
        setIsLoading(false)
      }
    }

    fetchCommunities()
  }, [toast])

  if (isLoading) {
    return <div>Loading...</div>
  }

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">My Communities</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Name</TableHead>
            <TableHead>Members</TableHead>
            <TableHead>Token Price</TableHead>
            <TableHead>Initial Supply</TableHead>
            <TableHead>Max Supply</TableHead>
            <TableHead>Created At</TableHead>
            <TableHead className="w-[150px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {communities.map((community) => (
            <TableRow key={community.id}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={community.token.logo || '/placeholder.svg'} alt={community.name} />
                    <AvatarFallback>{community.token.symbol}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{community.name}</div>
                    <div className="text-sm text-muted-foreground">{community.token.symbol}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{community._count.members.toLocaleString()}</TableCell>
              <TableCell>${community.token.initialPrice.toFixed(4)}</TableCell>
              <TableCell>{BigInt(community.token.initialSupply).toLocaleString()}</TableCell>
              <TableCell>{BigInt(community.token.maxSupply).toLocaleString()}</TableCell>
              <TableCell>{new Date(community.createdAt).toLocaleDateString()}</TableCell>
              <TableCell>
                <div className="flex flex-col space-y-2">
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Pencil className="h-4 w-4 mr-2" />
                    Edit
                  </Button>
                  <Button variant="outline" size="sm" className="w-full justify-start">
                    <Eye className="h-4 w-4 mr-2" />
                    View
                  </Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}
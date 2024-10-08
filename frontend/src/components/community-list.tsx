'use client'

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Pencil } from "lucide-react"

export function CommunityList() {
  const communities = [
    {
      name: "Solana Builders",
      symbol: "SOL",
      members: 15234,
      tokenPrice: 0.0023,
      change24h: 5.67,
      marketCap: 345678,
      logo: "/placeholder.svg",
      status: "Live",
    },
    {
      name: "NFT Collectors",
      symbol: "NFTC",
      members: 8765,
      tokenPrice: 0.0045,
      change24h: -2.34,
      marketCap: 234567,
      logo: "/placeholder.svg",
      status: "Pending",
    },
    {
      name: "DeFi Innovators",
      symbol: "DEFI",
      members: 12543,
      tokenPrice: 0.0078,
      change24h: 10.23,
      marketCap: 567890,
      logo: "/placeholder.svg",
      status: "Live",
    },
    {
      name: "Metaverse Explorers",
      symbol: "META",
      members: 9876,
      tokenPrice: 0.0056,
      change24h: -1.45,
      marketCap: 456789,
      logo: "/placeholder.svg",
      status: "Pending",
    },
    {
      name: "Crypto Gamers",
      symbol: "GAME",
      members: 18765,
      tokenPrice: 0.0034,
      change24h: 7.89,
      marketCap: 678901,
      logo: "/placeholder.svg",
      status: "Live",
    },
  ]

  return (
    <div className="w-full max-w-6xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Community List</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[250px]">Name</TableHead>
            <TableHead>Members</TableHead>
            <TableHead>Token Price</TableHead>
            <TableHead>24h Change</TableHead>
            <TableHead>Market Cap</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="w-[150px]">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {communities.map((community) => (
            <TableRow key={community.symbol}>
              <TableCell className="font-medium">
                <div className="flex items-center space-x-2">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src={community.logo} alt={community.name} />
                    <AvatarFallback>{community.symbol}</AvatarFallback>
                  </Avatar>
                  <div>
                    <div>{community.name}</div>
                    <div className="text-sm text-muted-foreground">{community.symbol}</div>
                  </div>
                </div>
              </TableCell>
              <TableCell>{community.members.toLocaleString()}</TableCell>
              <TableCell>${community.tokenPrice.toFixed(4)}</TableCell>
              <TableCell>
                <Badge variant={community.change24h >= 0 ? "success" : "destructive"}>
                  {community.change24h >= 0 ? "+" : ""}{community.change24h.toFixed(2)}%
                </Badge>
              </TableCell>
              <TableCell>${community.marketCap.toLocaleString()}</TableCell>
              <TableCell>
                <Badge variant={community.status === "Live" ? "success" : "warning"}>
                  {community.status}
                </Badge>
              </TableCell>
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
import React, { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Search } from "lucide-react"
import Image from 'next/image'
import Link from 'next/link'

export interface Token {
  id: number;
  name: string;
  symbol: string;
  logo: string;
  community: string;
}

const mockTokens: Token[] = [
  { id: 1, name: "ANIME", symbol: "ANI", logo: "/placeholder.svg?height=40&width=40", community: "Anime DAO" },
  { id: 2, name: "MANGA", symbol: "MNG", logo: "/placeholder.svg?height=40&width=40", community: "Manga Lovers" },
  { id: 3, name: "OTAKU", symbol: "OTK", logo: "/placeholder.svg?height=40&width=40", community: "Otaku United" },
]

// export interface SelectTokenProps {
//   onNext: (token: Token) => void;
// }

// export default function SelectToken({ onNext }: SelectTokenProps) {
export default function SelectToken() {
  const [searchTerm, setSearchTerm] = useState('')
  const [searchResults, setSearchResults] = useState<Token[]>([])
  const [selectedToken, setSelectedToken] = useState<Token | null>(null)

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase()
    setSearchTerm(term)
    if (term.length > 0) {
      const filtered = mockTokens.filter(token => 
        token.name.toLowerCase().includes(term) || 
        token.symbol.toLowerCase().includes(term) ||
        token.community.toLowerCase().includes(term)
      )
      setSearchResults(filtered)
    } else {
      setSearchResults([])
    }
  }

  const handleSelectToken = (token: Token) => {
    setSelectedToken(token)
  }

  // const handleNext = () => {
  //   if (selectedToken) {
  //     onNext(selectedToken)
  //   }
  // }

  // const handleNext = () => {
  //   console.log("click")
  // }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
      <Card className="max-w-2xl mx-auto">
        <CardContent className="p-6">
          <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
            Select a Token for Your Bounty
          </h1>
          <div className="relative mb-4">
            <Input
              type="text"
              placeholder="Search tokens or communities..."
              value={searchTerm}
              onChange={handleSearch}
              className="pl-10"
              aria-label="Search tokens or communities"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
          {searchTerm.length > 0 && (
            <ScrollArea className="h-[400px] rounded-md border p-4">
              {searchResults.length > 0 ? (
                searchResults.map(token => (
                  <div
                    key={token.id}
                    className={`flex items-center space-x-4 p-3 rounded-lg cursor-pointer transition-colors duration-200 ${
                      selectedToken?.id === token.id ? 'bg-blue-100' : 'hover:bg-gray-100'
                    }`}
                    onClick={() => handleSelectToken(token)}
                    role="button"
                    tabIndex={0}
                    onKeyPress={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        handleSelectToken(token);
                      }
                    }}
                  >
                    <Image src={token.logo} alt={`${token.name} logo`} className="w-10 h-10 rounded-full" height={10} width={10} />
                    <div>
                      <p className="font-semibold">{token.name} ({token.symbol})</p>
                      <p className="text-sm text-gray-600">{token.community}</p>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-center text-gray-500 mt-4">No tokens found. Try a different search term.</p>
              )}
            </ScrollArea>
          )}
          {selectedToken && (
            <div className="mt-6">
              <h2 className="text-lg font-semibold mb-2">Selected Token:</h2>
              <div className="flex items-center space-x-4 p-3 bg-blue-100 rounded-lg">
                <Image src={selectedToken.logo} alt={`${selectedToken.name} logo`} className="w-10 h-10 rounded-full" width={10} height={10} />
                <div>
                  <p className="font-semibold">{selectedToken.name} ({selectedToken.symbol})</p>
                  <p className="text-sm text-gray-600">{selectedToken.community}</p>
                </div>
              </div>
            </div>
          )}
          {/* <Button 
            onClick={handleNext} 
            className="w-full mt-6" 
            disabled={!selectedToken}
          >
            Next
          </Button> */}
          <Link href="/bounties/create/XXX">
          <Button 
            className="w-full mt-6" 
            disabled={!selectedToken}
          >
            Next
          </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  )
}
'use client';
/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { Textarea } from "@/components/ui/textarea"
// import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
// import { Label } from "@/components/ui/label"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { ChevronRight, Home } from 'lucide-react'
import Link from 'next/link'

export default function Component() {
//   const [action, setAction] = useState('buy')
  const [amount, setAmount] = useState('0')

  const tokenHolders = [
    { rank: 1, address: '0x1234...5678', balance: '100,000' },
    { rank: 2, address: '0xabcd...efgh', balance: '75,000' },
    { rank: 3, address: '0x9876...5432', balance: '50,000' },
    { rank: 4, address: '0xijkl...mnop', balance: '25,000' },
    { rank: 5, address: '0xqrst...uvwx', balance: '10,000' },
  ]

  const bondingCurveData = [
    { supply: 0, price: 0 },
    { supply: 1000000, price: 0.1 },
    { supply: 2000000, price: 0.2 },
    { supply: 3000000, price: 0.275 },
    { supply: 4000000, price: 0.325 },
    { supply: 5000000, price: 0.35 },
  ]
  const activities = [
    { type: 'Buy', amount: '1000', date: '2023-06-01', address: '0xabcd...efgh' },
    { type: 'Sell', amount: '500', date: '2023-06-02', address: '0x1234...5678' },
    { type: 'Buy', amount: '2000', date: '2023-06-03', address: '0x9876...5432' },
    { type: 'Buy', amount: '750', date: '2023-06-04', address: '0xijkl...mnop' },
    { type: 'Sell', amount: '300', date: '2023-06-05', address: '0xqrst...uvwx' },
  ]
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
              <Link href="/communities" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2">
                Communities
              </Link>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <ChevronRight className="w-4 h-4 text-gray-400" />
              <span className="ml-1 text-sm font-medium text-gray-500 md:ml-2">Anime Community</span>
            </div>
          </li>
        </ol>
      </nav>

      <div 
        className="h-64 bg-cover bg-center"
        // style={{ backgroundImage: "url('https://public.blob.vercel-storage.com/anime-background-eZWDKXXHXhQZOLUB1aqsKTuXZFZBrA.jpg')" }}
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1578632767115-351597cf2477?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80&quot;')" }}
        
      >
        <div className="h-full flex items-center justify-center bg-black bg-opacity-50">
          <h1 className="text-4xl font-bold text-white">Anime Voice Actor Fan Club
          </h1>
        </div>
      </div>
      <div className="max-w-7xl mx-auto p-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-8">
          <section className="text-gray-800">
          <p className="text-lg mb-4">
          Welcome to the Anime Voice Actor Fan Club! We're a community dedicated to celebrating the talented voices behind our favorite anime characters.


            </p>
            <p className="mb-4">
                Join us in our mission to:
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Share the latest news and interviews with voice actors</li>
              <li>Discuss voice acting techniques and performances</li>
              <li>Organize and attend voice actor panels and events</li>
              <li>Create a comprehensive database of voice actor information</li>
            </ul>

            <p>
            Together, we'll build the ultimate resource for anime voice actor enthusiasts and foster a vibrant community of fans who appreciate the art of voice acting.
            </p>
          </section>
          <section>
          <Card>
            <CardContent className="pt-6">
              <Tabs defaultValue="comments" className="w-full">
                <TabsList className="grid w-full grid-cols-2 mb-4">
                  <TabsTrigger value="comments">Comments</TabsTrigger>
                  <TabsTrigger value="activities">Activities</TabsTrigger>
                </TabsList>
                <TabsContent value="comments">
                  <Textarea placeholder="Share your thoughts about this project..." className="bg-white text-gray-800 border-gray-300" />
                  <Button className="mt-4 bg-blue-600 text-white hover:bg-blue-700">Post Comment</Button>
                </TabsContent>
                <TabsContent value="activities">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Type</TableHead>
                        <TableHead>Amount</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead>Address</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {activities.map((activity, index) => (
                        <TableRow key={index}>
                          <TableCell>{activity.type}</TableCell>
                          <TableCell>{activity.amount}</TableCell>
                          <TableCell>{activity.date}</TableCell>
                          <TableCell>{activity.address}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          </section>
        </div>
        <div className="space-y-8">
        <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">Token Actions</CardTitle>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="buy" className="w-full">
                <TabsList className="grid w-full grid-cols-2">
                  <TabsTrigger value="buy">Buy</TabsTrigger>
                  <TabsTrigger value="sell">Sell</TabsTrigger>
                </TabsList>
                <TabsContent value="buy">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="flex-grow bg-white text-gray-800 border-gray-300"
                      />
                      <span className="font-semibold">SOL</span>
                    </div>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Buy Tokens</Button>
                  </div>
                </TabsContent>
                <TabsContent value="sell">
                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Input
                        type="number"
                        placeholder="Enter amount"
                        value={amount}
                        onChange={(e) => setAmount(e.target.value)}
                        className="flex-grow bg-white text-gray-800 border-gray-300"
                      />
                      <span className="font-semibold">Anime</span>
                    </div>
                    <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">Sell Tokens</Button>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Project Stats</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex justify-between">
                <span>Funds Raised:</span>
                <span className="font-bold">$1,500,000</span>
              </div>
              <div className="flex justify-between">
                <span>Liquidity Pool:</span>
                <span className="font-bold">$500,000</span>
              </div>
              <div className="flex justify-between">
                <span>Token Supply:</span>
                <span className="font-bold ">5,000,000 Anime</span>
              </div>
              <div className="flex justify-between">
                <span>Current Token Price:</span>
                <span className="font-bold ">0.05 SOL</span>
              </div>
            </CardContent>
          </Card>
          <div className="space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">Bonding Curve</CardTitle>
            </CardHeader>
            <CardContent>
              <ResponsiveContainer width="100%" height={300}>
                <LineChart data={bondingCurveData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#a0aec0" />
                  <XAxis dataKey="supply" label={{ value: 'Token Supply', position: 'insideBottom', offset: -5 }} stroke="#4a5568" />
                  <YAxis label={{ value: 'Price', angle: -90, position: 'insideLeft' }} stroke="#4a5568" />
                  <Tooltip contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0' }} />
                  <Line type="monotone" dataKey="price" stroke="#3182ce" />
                </LineChart>
              </ResponsiveContainer>
            </CardContent>
          </Card>
        
        </div>
          <Card>
            <CardHeader>
              <CardTitle>Top Token Holders</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Rank</TableHead>
                    <TableHead>Address</TableHead>
                    <TableHead>Balance</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {tokenHolders.map((holder) => (
                    <TableRow key={holder.rank}>
                      <TableCell>{holder.rank}</TableCell>
                      <TableCell>{holder.address}</TableCell>
                      <TableCell>{holder.balance}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
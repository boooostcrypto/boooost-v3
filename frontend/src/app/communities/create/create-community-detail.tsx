'use client'

import React, { useState, useCallback } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { useDropzone } from 'react-dropzone'
import Link from 'next/link'
import { toast } from '@/hooks/use-toast'
import { getAccessToken } from '@privy-io/react-auth'
// import { useRouter } from 'next/navigation'

export default function CreateCommunityDetail() {
  // const router = useRouter();
  
  const [communityName, setCommunityName] = useState('')
  const [description, setDescription] = useState('')
  const [initialSupply, setInitialSupply] = useState('')
  const [initialPrice, setInitialPrice] = useState('')
  const [maxSupply, setMaxSupply] = useState('')
  const [reserveRatio, setReserveRatio] = useState('')
  const [coverImage, setCoverImage] = useState<File | null>(null)
  const [tokenLogo, setTokenLogo] = useState<File | null>(null)
  const [tokenName, setTokenName] = useState('')
  const [tokenSymbol, setTokenSymbol] = useState('')
  const [website, setWebsite] = useState('')
  const [twitter, setTwitter] = useState('')
  const [telegram, setTelegram] = useState('')
  const [discord, setDiscord] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const investmentStartDate = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000).toISOString().split('T')[0]

  const onDropCover = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setCoverImage(acceptedFiles[0])
    }
  }, [])

  const onDropLogo = useCallback((acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setTokenLogo(acceptedFiles[0])
    }
  }, [])

  const { getRootProps: getCoverRootProps, getInputProps: getCoverInputProps } = useDropzone({
    onDrop: onDropCover,
    accept: {'image/*': []},
    multiple: false
  })

  const { getRootProps: getLogoRootProps, getInputProps: getLogoInputProps } = useDropzone({
    onDrop: onDropLogo,
    accept: {'image/*': []},
    multiple: false
  })

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault()
  //   console.log({
  //     communityName,
  //     description,
  //     initialSupply,
  //     initialPrice,
  //     maxSupply,
  //     reserveRatio,
  //     coverImage,
  //     tokenLogo,
  //     tokenName,
  //     tokenSymbol,
  //     website,
  //     twitter,
  //     telegram,
  //     discord,
  //     investmentStartDate,
  //     agreeToTerms
  //   })
  // }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Upload images and get their URLs
      const coverImageUrl = coverImage ? await uploadImage(coverImage) : null
      const tokenLogoUrl = tokenLogo ? await uploadImage(tokenLogo) : null

      const communityData = {
        community: {
          name: communityName,
          description,
          coverImage: coverImageUrl,
          // creatorId: 1, // Assuming you have a way to get the current user's ID
        },
        token: {
          name: tokenName,
          symbol: tokenSymbol,
          logo: tokenLogoUrl,
          initialSupply: parseFloat(initialSupply),
          initialPrice: parseFloat(initialPrice),
          maxSupply: parseFloat(maxSupply),
          reserveRatio: parseFloat(reserveRatio),
          investmentStartDate,
        },
        communityLinks: {
          website,
          twitter,
          telegram,
          discord,
        },
      }

      const accessToken = await getAccessToken();
      const response = await fetch('/api/community', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        body: JSON.stringify(communityData),
      })

      if (!response.ok) {
        throw new Error('Failed to create community')
      }

      const result = await response.json()
      toast({
        title: "Success",
        description: "Community created successfully!",
        // action: (
        //   <ToastAction altText="Go to communities">Go to communities</ToastAction>
        // ),
      })
      // router.push('/communities/create/saved')
    } catch (error) {
      console.error('Error creating community:', error)
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create community. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  // Helper function to upload images
  const uploadImage = async (file: File): Promise<string> => {
    const formData = new FormData()
    formData.append('file', file)

    const response = await fetch('/api/upload', {
      method: 'POST',
      body: formData,
    })

    if (!response.ok) {
      throw new Error('Failed to upload image')
    }

    const { url } = await response.json()
    return url
  }

  return (
    <div className="container mx-auto p-4 min-h-screen bg-gradient-to-br from-blue-50 to-purple-50">
      <h1 className="text-3xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Launch Community</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <Card className="border-0 shadow-lg bg-white bg-opacity-70 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Community Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="communityName" className="text-blue-700">Community Name</Label>
              <Input
                id="communityName"
                value={communityName}
                onChange={(e) => setCommunityName(e.target.value)}
                placeholder="Enter community name"
                required
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="description" className="text-blue-700">Description</Label>
              <Textarea
                id="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Describe your community token"
                required
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label className="text-blue-700 mb-2 block">Cover Image</Label>
              <div {...getCoverRootProps()} className="border-2 border-dashed border-blue-300 rounded-md p-4 text-center cursor-pointer hover:border-purple-500 transition-colors">
                <input {...getCoverInputProps()} />
                <p className="text-blue-600">{coverImage ? coverImage.name : 'Drag & drop cover image here, or click to select'}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white bg-opacity-70 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Token Economics</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="tokenName" className="text-blue-700">Token Name</Label>
              <Input
                id="tokenName"
                value={tokenName}
                onChange={(e) => setTokenName(e.target.value)}
                placeholder="Enter token name"
                required
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="tokenSymbol" className="text-blue-700">Token Symbol</Label>
              <Input
                id="tokenSymbol"
                value={tokenSymbol}
                onChange={(e) => setTokenSymbol(e.target.value)}
                placeholder="e.g. ANM"
                required
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label className="text-blue-700 mb-2 block">Token Logo</Label>
              <div {...getLogoRootProps()} className="border-2 border-dashed border-blue-300 rounded-md p-4 text-center cursor-pointer hover:border-purple-500 transition-colors">
                <input {...getLogoInputProps()} />
                <p className="text-blue-600">{tokenLogo ? tokenLogo.name : 'Drag & drop token logo here, or click to select'}</p>
              </div>
            </div>
            <div>
              <Label htmlFor="initialSupply" className="text-blue-700">Initial Token Supply</Label>
              <Input
                id="initialSupply"
                type="number"
                value={initialSupply}
                onChange={(e) => setInitialSupply(e.target.value)}
                placeholder="Enter initial token supply"
                required
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="initialPrice" className="text-blue-700">Initial Token Price (in SOL)</Label>
              <Input
                id="initialPrice"
                type="number"
                value={initialPrice}
                onChange={(e) => setInitialPrice(e.target.value)}
                placeholder="Enter initial token price"
                required
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="maxSupply" className="text-blue-700">Maximum Token Supply</Label>
              <Input
                id="maxSupply"
                type="number"
                value={maxSupply}
                onChange={(e) => setMaxSupply(e.target.value)}
                placeholder="Enter maximum token supply"
                required
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="reserveRatio" className="text-blue-700">Reserve Ratio (%)</Label>
              <Input
                id="reserveRatio"
                type="number"
                value={reserveRatio}
                onChange={(e) => setReserveRatio(e.target.value)}
                placeholder="Enter reserve ratio"
                required
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="investmentStartDate" className="text-blue-700">Investment Start Date</Label>
              <Input
                id="investmentStartDate"
                type="date"
                value={investmentStartDate}
                readOnly
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 shadow-lg bg-white bg-opacity-70 backdrop-blur-lg">
          <CardHeader>
            <CardTitle className="text-2xl text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">Community Links (Optional)</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="website" className="text-blue-700">Website</Label>
              <Input
                id="website"
                type="url"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
                placeholder="https://your-website.com"
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="twitter" className="text-blue-700">X/Twitter</Label>
              <Input
                id="twitter"
                value={twitter}
                onChange={(e) => setTwitter(e.target.value)}
                placeholder="@your_twitter_handle"
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="telegram" className="text-blue-700">Telegram Link</Label>
              <Input
                id="telegram"
                type="url"
                value={telegram}
                onChange={(e) => setTelegram(e.target.value)}
                placeholder="https://t.me/your_telegram_group"
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
            <div>
              <Label htmlFor="discord" className="text-blue-700">Discord Link</Label>
              <Input
                id="discord"
                type="url"
                value={discord}
                onChange={(e) => setDiscord(e.target.value)}
                placeholder="https://discord.gg/your_invite_code"
                className="border-blue-300 focus:border-purple-500 transition-colors"
              />
            </div>
          </CardContent>
        </Card>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreeToTerms"
            checked={agreeToTerms}
            onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
          />
          <Label htmlFor="agreeToTerms" className="text-blue-700">
            I agree to the <a href="#" className="text-purple-600 hover:underline">Terms of Service</a>
          </Label>
        </div>
       
        <Button 
          type="submit" 
          className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white transition-all duration-300 ease-in-out transform hover:scale-105"
          disabled={!agreeToTerms}
        >
          {isSubmitting ? 'Creating Community...' : 'Create Community'}
        </Button>
      </form>
    </div>
  )
}
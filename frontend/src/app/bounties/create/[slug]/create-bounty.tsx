"use client";
import React, { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { CalendarIcon, PlusCircle, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { Checkbox } from "@/components/ui/checkbox"
import Image from 'next/image'
interface Reward {
  rank: number;
  amount: string;
}

// 事前に選択されたトークン情報
const selectedToken = {
  value: "anime",
  label: "ANIME",
  logo: "/placeholder.svg?height=32&width=32",
  community: "Anime DAO"
}

// カテゴリの選択肢
const categories = [
  "Marketing",
  "Writing",
  "Video",
  "AMA",
  "Content",
  "Others"
]

export default function CreateBounty() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [rewards, setRewards] = useState<Reward[]>([{ rank: 1, amount: '' }])
  const [deadline, setDeadline] = useState<Date | undefined>(undefined)
  const [category, setCategory] = useState('')
  const [agreeToTerms, setAgreeToTerms] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ title, description, rewards, deadline, category, agreeToTerms })
  }

  const addReward = () => {
    setRewards(prevRewards => [...(prevRewards || []), { rank: (prevRewards?.length || 0) + 1, amount: '' }])
  }

  const removeReward = (index: number) => {
    setRewards(prevRewards => (prevRewards || []).filter((_, i) => i !== index))
  }

  const updateReward = (index: number, field: keyof Reward, value: string) => {
    setRewards(prevRewards => {
      if (!prevRewards) return [{ rank: 1, amount: '' }]
      const newRewards = [...prevRewards]
      if (newRewards[index]) {
        newRewards[index] = { ...newRewards[index], [field]: field === 'rank' ? parseInt(value) || 1 : value }
      }
      return newRewards
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100 p-6">
      <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-lg p-6">
        <h1 className="text-3xl font-bold mb-6 text-center bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
          Create a New Bounty
        </h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="title" className="block text-sm font-medium text-gray-700">Title</label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter bounty title"
              required
              className="mt-1"
            />
          </div>
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">Description</label>
            <Textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Describe the bounty details"
              required
              className="mt-1"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Token</label>
            <div className="flex items-center space-x-2 p-2 border rounded-md">
              <Image src={selectedToken.logo} alt={selectedToken.label} className="w-8 h-8" width={8} height={8} />
              <div>
                <p className="font-medium">{selectedToken.label}</p>
                <p className="text-sm text-gray-500">{selectedToken.community}</p>
              </div>
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Rewards</label>
            {rewards.map((reward, index) => (
              <div key={index} className="flex items-center space-x-2 mb-2">
                <Input
                  type="number"
                  placeholder="Rank"
                  value={reward.rank}
                  onChange={(e) => updateReward(index, 'rank', e.target.value)}
                  className="w-20"
                />
                <Input
                  type="number"
                  placeholder="Amount"
                  value={reward.amount}
                  onChange={(e) => updateReward(index, 'amount', e.target.value)}
                  className="flex-grow"
                />
                <Button type="button" variant="ghost" onClick={() => removeReward(index)}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ))}
            <Button type="button" onClick={addReward} variant="outline" className="mt-2">
              <PlusCircle className="h-4 w-4 mr-2" /> Add Reward
            </Button>
          </div>
          <div>
            <label htmlFor="deadline" className="block text-sm font-medium text-gray-700">Deadline</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant={"outline"}
                  className={cn(
                    "w-full justify-start text-left font-normal mt-1",
                    !deadline && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {deadline ? format(deadline, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={deadline}
                  onSelect={setDeadline}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <label htmlFor="category" className="block text-sm font-medium text-gray-700">Category</label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="w-full mt-1">
                <SelectValue placeholder="Select a category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat} value={cat.toLowerCase()}>{cat}</SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox
              id="terms"
              checked={agreeToTerms}
              onCheckedChange={(checked) => setAgreeToTerms(checked as boolean)}
            />
            <label
              htmlFor="terms"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
            >
              I agree to the terms and conditions
            </label>
          </div>
          <Button type="submit" className="w-full" disabled={!agreeToTerms}>
            Save as Draft
          </Button>
        </form>
      </div>
    </div>
  )
}
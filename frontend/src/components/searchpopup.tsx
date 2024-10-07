'use client';

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Search, X } from "lucide-react"

export default function HeaderSearch() {
  const [open, setOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const [searchHistory, setSearchHistory] = useState<string[]>([])
  const [suggestions] = useState(['React', 'Next.js', 'TypeScript', 'JavaScript', 'CSS', 'HTML'])
  const inputRef = useRef<HTMLInputElement>(null)
  

  useEffect(() => {
    const savedHistory = localStorage.getItem('searchHistory')
    if (savedHistory) {
      setSearchHistory(JSON.parse(savedHistory))
    }
  }, [])

  useEffect(() => {
    if (open && inputRef.current) {
      inputRef.current.focus()
    }
  }, [open])

  const saveSearchHistory = (history: string[]) => {
    localStorage.setItem('searchHistory', JSON.stringify(history))
  }

  const handleSearch = () => {
    if (searchTerm.trim() !== '') {
      const newHistory = [searchTerm, ...searchHistory.filter(item => item !== searchTerm)].slice(0, 5)
      setSearchHistory(newHistory)
      saveSearchHistory(newHistory)
      setSearchTerm('')
      setOpen(false)
      // ここで実際の検索処理を行う
      console.log('Searching for:', searchTerm)
    }
  }

  const removeHistoryItem = (item: string) => {
    const newHistory = searchHistory.filter(h => h !== item)
    setSearchHistory(newHistory)
    saveSearchHistory(newHistory)
  }

  const filteredSuggestions = suggestions.filter(suggestion => 
    suggestion.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="w-9 px-0">
          <Search className="h-4 w-4" />
          {/* <Search className="" /> */}
          <span className="sr-only">Search</span>
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <Command className="rounded-lg border shadow-md">
          <CommandInput
            ref={inputRef}
            placeholder="Search..."
            value={searchTerm}
            onValueChange={setSearchTerm}
          />
          <CommandList>
            {searchTerm && (
              <CommandEmpty>No results found.</CommandEmpty>
            )}
            {searchTerm && (
              // <CommandGroup heading="候補">
              <CommandGroup heading="Suggestions">
              {filteredSuggestions.map((suggestion) => (
                  <CommandItem
                    key={suggestion}
                    onSelect={() => {
                      setSearchTerm(suggestion)
                      handleSearch()
                    }}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    {suggestion}
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
            {searchHistory.length > 0 && (
              <CommandGroup heading="Search History">
                {searchHistory.map((item) => (
                  <CommandItem
                    key={item}
                    onSelect={() => {
                      setSearchTerm(item)
                      handleSearch()
                    }}
                  >
                    <Search className="mr-2 h-4 w-4" />
                    {item}
                    <Button
                      variant="ghost"
                      size="icon"
                      className="ml-auto h-4 w-4"
                      onClick={(e) => {
                        e.stopPropagation()
                        removeHistoryItem(item)
                      }}
                    >
                      <X className="h-3 w-3" />
                      <span className="sr-only">delete from search history</span>
                    </Button>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
      </DialogContent>
    </Dialog>
  )
}
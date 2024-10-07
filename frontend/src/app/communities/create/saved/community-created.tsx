import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check, Edit, Link, Share2 } from "lucide-react"

export default function CommunityCreated() {
  return (
    <Card className="w-[380px]">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <div className="rounded-full bg-green-500 p-1">
            <Check className="h-4 w-4 text-white" />
          </div>
          <CardTitle>Community Created</CardTitle>
        </div>
        <CardDescription>
          To start your token launch, you need to gather followers.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="link">Public Link</Label>
            <div className="flex space-x-2">
              <Input id="link" defaultValue="https://example.com/community" readOnly />
              <Button size="icon" variant="outline">
                <Link className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">
          <Edit className="mr-2 h-4 w-4" />
          Edit
        </Button>
        <Button>
          <Share2 className="mr-2 h-4 w-4" />
          Share
        </Button>
      </CardFooter>
    </Card>
  )
}
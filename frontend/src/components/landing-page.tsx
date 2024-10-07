'use client';
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Heart, Zap, Users, Coins, TrendingUp, Star } from "lucide-react"
import { Heart, Zap, Coins, Star } from "lucide-react"



// import { Button } from "@/components/ui/button"
// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
// import { Heart, Zap, Users, Coins, TrendingUp, Star } from "lucide-react"

export default function LandingPage() {
  return (
    // <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">

    
<>

      <main className="flex-grow">
        <section className="py-20 text-center relative overflow-hidden">
          <div 
            className="absolute inset-0 z-0" 
            style={{
                // backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
                backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
                backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.1
            }}
          ></div>
          <div className="container mx-auto px-4 relative z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Earn from Your Passions and Contributions
            </h1>
            <p className="text-xl md:text-2xl mb-10 text-gray-300">Boooost: The platform where communities thrive and members profit from their engagement.</p>
            <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <Link href="/communities" prefetch={false}>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
                
                  Join a Thriving Community
                
                </Button>
              </Link>
              <Link href="/bounties" prefetch={false}>
                <Button size="lg" className="bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
                
                Start Earning Now
                </Button>
              </Link>
            </div>
          </div>
        </section>

        <section id="concept" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our Concept</h2>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-lg text-gray-300 mb-6">
                Boooost is a revolutionary platform that transforms existing communities into vibrant ecosystems where members can earn from their contributions and passions.
              </p>
              <p className="text-lg text-gray-300">
                By introducing community-specific tokens and a bounty system, we turn hobbies into livelihoods and create a space where work you love naturally congregates.
              </p>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Key Features</h2>
            <div className="space-y-6 max-w-3xl mx-auto">
              <FeatureCard
                icon={<Heart className="h-6 w-6 text-purple-400" />}
                title="Passion-Driven Economy"
                description="Turn your community contributions and interests into a sustainable income stream."
              />
              <FeatureCard
                icon={<Coins className="h-6 w-6 text-purple-400" />}
                title="Community Tokens"
                description="Unique tokens tailored to each community, creating a specialized internal economy."
              />
              <FeatureCard
                icon={<Star className="h-6 w-6 text-purple-400" />}
                title="Bounty System"
                description="Complete tasks and challenges to earn tokens, transforming engagement into earnings."
              />
              <FeatureCard
                icon={<Zap className="h-6 w-6 text-purple-400" />}
                title="Ecosystem Activation"
                description="Energize your community with token utilities that drive participation and value creation."
              />
            </div>
          </div>
        </section>

        <section id="ecosystem" className="py-20 bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Boooost Ecosystem Cycle</h2>
            <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
              <EcosystemStep color="purple" text="Fair Token Launch via Bonding Curve" />
              <div className="text-2xl text-purple-400">↓</div>
              <EcosystemStep color="blue" text="Community Investment" />
              <div className="text-2xl text-purple-400">↓</div>
              <EcosystemStep color="green" text="Bounty Creation and Fulfillment" />
              <div className="text-2xl text-purple-400">↓</div>
              <EcosystemStep color="yellow" text="Increase in Community Earners" />
              <div className="text-2xl text-purple-400">↓</div>
              <EcosystemStep color="red" text="Ecosystem Growth and Expansion" />
            </div>
          </div>
        </section>

        <section className="py-20 bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-purple-900 border-purple-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-purple-400">Ready to Boooost Your Community?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">Join us in revolutionizing community engagement and turn your passion into a thriving ecosystem.</p>
                  <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
                    Create a Community
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-pink-900 border-pink-700">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-pink-400">Want to Start Earning from Your Skills?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-6">Discover communities where your talents are valued and compensated.</p>
                  <Button size="lg" className="w-full bg-pink-600 hover:bg-pink-700 text-white">
                    Find Earning Opportunities
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
    </>
)
}

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
}

function FeatureCard({ icon, title, description }: FeatureCardProps) {
  return (
    <Card className="bg-gray-800 border-gray-700">
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-purple-400">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

interface EcosystemStepProps {
  color: string;
  text: string;
}

function EcosystemStep({ color, text }: EcosystemStepProps) {
  const bgColor = `bg-${color}-900`;
  const textColor = `text-${color}-400`;
  return (
    <div className={`${bgColor} ${textColor} p-4 rounded-lg text-center w-full border border-${color}-700`}>
      <p className="font-semibold">{text}</p>
    </div>
  )
}



// export default function LandingPage() {
//   return (
//     <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-900 to-gray-800 text-white">
//       <header className="container mx-auto px-4 py-6 flex justify-between items-center">
//         <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Boooost</div>
//         <nav>
//           <ul className="flex space-x-6">
//             <li><a href="#concept" className="hover:text-purple-400 transition-colors">Concept</a></li>
//             <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
//             <li><a href="#ecosystem" className="hover:text-purple-400 transition-colors">Ecosystem</a></li>
//           </ul>
//         </nav>
//       </header>

//       <main className="flex-grow">
//         <section className="py-20 text-center relative overflow-hidden">
//           <div 
//             className="absolute inset-0 z-0" 
//             style={{
//               backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
//               backgroundSize: 'cover',
//               backgroundPosition: 'center',
//               opacity: 0.1
//             }}
//           ></div>
//           <div className="container mx-auto px-4 relative z-10">
//             <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
//               Earn from Your Passions and Contributions
//             </h1>
//             <p className="text-xl md:text-2xl mb-10 text-gray-300">Boooost: The platform where communities thrive and members profit from their engagement.</p>
//             <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-4">
//               <Button size="lg" className="bg-purple-600 hover:bg-purple-700 text-white">
//                 Join a Thriving Community
//               </Button>
//               <Button size="lg" className="bg-transparent border border-purple-400 text-purple-400 hover:bg-purple-400 hover:text-white">
//                 Start Earning Now
//               </Button>
//             </div>
//           </div>
//         </section>

//         <section id="concept" className="py-20 bg-gray-800">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Our Concept</h2>
//             <div className="max-w-3xl mx-auto text-center">
//               <p className="text-lg text-gray-300 mb-6">
//                 Boooost is a revolutionary platform that transforms existing communities into vibrant ecosystems where members can earn from their contributions and passions.
//               </p>
//               <p className="text-lg text-gray-300">
//                 By introducing community-specific tokens and a bounty system, we turn hobbies into livelihoods and create a space where work you love naturally congregates.
//               </p>
//             </div>
//           </div>
//         </section>

//         <section id="features" className="py-20 bg-gray-900">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Key Features</h2>
//             <div className="space-y-6 max-w-3xl mx-auto">
//               <FeatureCard
//                 icon={<Heart className="h-6 w-6 text-purple-400" />}
//                 title="Passion-Driven Economy"
//                 description="Turn your community contributions and interests into a sustainable income stream."
//               />
//               <FeatureCard
//                 icon={<Coins className="h-6 w-6 text-purple-400" />}
//                 title="Community Tokens"
//                 description="Unique tokens tailored to each community, creating a specialized internal economy."
//               />
//               <FeatureCard
//                 icon={<Star className="h-6 w-6 text-purple-400" />}
//                 title="Bounty System"
//                 description="Complete tasks and challenges to earn tokens, transforming engagement into earnings."
//               />
//               <FeatureCard
//                 icon={<Zap className="h-6 w-6 text-purple-400" />}
//                 title="Ecosystem Activation"
//                 description="Energize your community with token utilities that drive participation and value creation."
//               />
//             </div>
//           </div>
//         </section>

//         <section id="ecosystem" className="py-20 bg-gray-800">
//           <div className="container mx-auto px-4">
//             <h2 className="text-3xl font-bold text-center mb-10 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Boooost Ecosystem Cycle</h2>
//             <div className="flex flex-col items-center space-y-4 max-w-2xl mx-auto">
//               <EcosystemStep color="purple" text="Fair Token Launch via Bonding Curve" />
//               <div className="text-2xl text-purple-400">↓</div>
//               <EcosystemStep color="blue" text="Community Investment" />
//               <div className="text-2xl text-purple-400">↓</div>
//               <EcosystemStep color="green" text="Bounty Creation and Fulfillment" />
//               <div className="text-2xl text-purple-400">↓</div>
//               <EcosystemStep color="yellow" text="Increase in Community Earners" />
//               <div className="text-2xl text-purple-400">↓</div>
//               <EcosystemStep color="red" text="Ecosystem Growth and Expansion" />
//             </div>
//           </div>
//         </section>

//         <section className="py-20 bg-gray-900">
//           <div className="container mx-auto px-4">
//             <div className="grid md:grid-cols-2 gap-8">
//               <Card className="bg-purple-900 border-purple-700">
//                 <CardHeader>
//                   <CardTitle className="text-2xl font-bold text-purple-400">Ready to Boooost Your Community?</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-300 mb-6">Join us in revolutionizing community engagement and turn your passion into a thriving ecosystem.</p>
//                   <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700 text-white">
//                     Create a Community
//                   </Button>
//                 </CardContent>
//               </Card>
//               <Card className="bg-pink-900 border-pink-700">
//                 <CardHeader>
//                   <CardTitle className="text-2xl font-bold text-pink-400">Want to Start Earning from Your Skills?</CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-gray-300 mb-6">Discover communities where your talents are valued and compensated.</p>
//                   <Button size="lg" className="w-full bg-pink-600 hover:bg-pink-700 text-white">
//                     Find Earning Opportunities
//                   </Button>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </section>
//       </main>

//       <footer className="bg-gray-900 text-gray-300 py-8">
//         <div className="container mx-auto px-4 text-center">
//           <p>&copy; 2023 Boooost. All rights reserved.</p>
//         </div>
//       </footer>
//     </div>
//   )
// }

// function FeatureCard({ icon, title, description }) {
//   return (
//     <Card className="bg-gray-800 border-gray-700">
//       <CardHeader>
//         <CardTitle className="flex items-center space-x-2 text-purple-400">
//           {icon}
//           <span>{title}</span>
//         </CardTitle>
//       </CardHeader>
//       <CardContent>
//         <p className="text-gray-300">{description}</p>
//       </CardContent>
//     </Card>
//   )
// }

// function EcosystemStep({ color, text }) {
//   const bgColor = `bg-${color}-900`
//   const textColor = `text-${color}-400`
//   return (
//     <div className={`${bgColor} ${textColor} p-4 rounded-lg text-center w-full border border-${color}-700`}>
//       <p className="font-semibold">{text}</p>
//     </div>
//   )
// }
// "use server";
"use client"; // Add this line at the top of your file

import  Link from "next/link";
import { Button } from "@/components/ui/button"
// import { NavigationMenu, NavigationMenuList, NavigationMenuLink } from "@/components/ui/navigation-menu"
// import {PrivyProvider, usePrivy} from '@privy-io/react-auth';
// import SearchPopup from '@/components/searchpopup'
// import {usePrivy} from '@privy-io/react-auth';
import { Home, Users, Award } from "lucide-react";
import { useAuth } from "@/hooks/useAuth";

export default function Header() {
  const {ready, authenticated, login} = useAuth();
  // Disable login when Privy is not ready or the user is already authenticated
  const disableLogin = !ready || (ready && authenticated);


  
    return (
      <>
      <header className="container mx-auto px-4 py-6 flex justify-between items-center">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          <Link href="/" prefetch={false}>Boooost</Link>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
          {/* <li><a href="/communities" className="hover:text-purple-400 transition-colors">Communities</a></li>
          <li><a href="/bounties" className="hover:text-purple-400 transition-colors">Bounties</a></li> */}
            <li><Link href="/communities" className="hover:text-purple-400 transition-colors" prefetch={false} >Communities</Link></li>
            <li><Link href="/bounties" className="hover:text-purple-400 transition-colors" prefetch={false}>Bounties</Link></li>
            <li>
            {/* <SearchPopup /> */}

              {disableLogin? (
                <>
                  <Link href="/dashboard"  prefetch={false} >dashboard</Link>
                </>
              ):(
              <>
                <Button variant="outline" disabled={disableLogin} onClick={login}>
                  Log in
                </Button>
              </>
              )}
            </li>
            {/* <li><a href="#concept" className="hover:text-purple-400 transition-colors">Concept</a></li>
            <li><a href="#features" className="hover:text-purple-400 transition-colors">Features</a></li>
            <li><a href="#ecosystem" className="hover:text-purple-400 transition-colors">Ecosystem</a></li> */}
          </ul>

        </nav>

        <nav className="md:hidden">
          <ul className="flex space-x-6">
            <li>

            {disableLogin? (
              <>
                  <Link href="/dashboard"  prefetch={false} >dashboard</Link>
                </>
              ):(
                <>
                <Button variant="outline" disabled={disableLogin} onClick={login}>
                  Log in
                </Button>
              </>
              )}
            </li>
            
          </ul>
        </nav>

        <div className="md:hidden fixed bottom-0 left-0 right-0 bg-gray-900 text-white border-t border-gray-700 py-2 z-50">
        <div className="container mx-auto px-4">
          <ul className="flex justify-around">
            <li>
              <Link href="/" className="flex flex-col items-center hover:text-purple-400 transition-colors" prefetch={false}>
                <Home size={24} />
                <span className="text-xs mt-1">Home</span>
              </Link>
            </li>
            <li>
              <Link href="/communities" className="flex flex-col items-center hover:text-purple-400 transition-colors" prefetch={false}>
                <Users size={24} />
                <span className="text-xs mt-1">Communities</span>
              </Link>
            </li>
            <li>
              <Link href="/bounties" className="flex flex-col items-center hover:text-purple-400 transition-colors" prefetch={false}>
                <Award size={24} />
                <span className="text-xs mt-1">Bounties</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      </header> 

    {/* <header className="flex h-16 items-center justify-between border-b bg-background px-4 md:px-6">
            <Link href="/" className="flex items-center gap-2" prefetch={false}>
              <span className="text-lg font-semibold">
                Boooost
                </span>
            </Link>
            <div className="flex items-center gap-4">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/communities"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      Communities
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="/bounties"
                      className="group inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      Bounties
                    </Link>
                  </NavigationMenuLink>
                </NavigationMenuList>
              </NavigationMenu>
              <SearchPopup />
              {disableLogin? (
                <>
                <Link href="/dashboard"  prefetch={false}>dashboard</Link>
                </>
              ):(
<>              <Button variant="outline" disabled={disableLogin} onClick={login}>
                Log in
              </Button>
             
</>
              )}

            </div>
          </header> */}
          </>
  )
}



// function BoltIcon(props: React.SVGProps<SVGSVGElement>) {

//   return (
//     <svg
//       {...props}
//       xmlns="http://www.w3.org/2000/svg"
//       width="24"
//       height="24"
//       viewBox="0 0 24 24"
//       fill="none"
//       stroke="currentColor"
//       strokeWidth="2"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     >
//       <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
//       <circle cx="12" cy="12" r="4" />
//     </svg>
//   )
// }
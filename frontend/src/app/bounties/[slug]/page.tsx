'use client';



// import Link from "next/link"
// import { ChevronRight } from "lucide-react"

import BountyPage from './bounty-page'
// import Data2 from './data2'
// import Data3 from './data3'
// type BreadcrumbItem = {
//     label: string
//     href: string
//   }
  
//   type BreadcrumbProps = {
//     items: BreadcrumbItem[]
//   }
// function BountyBreadcrumb({label,href}: {label: string, href: string}) {
//     return (
//       <nav aria-label="Breadcrumb" className="mb-4">
//         <ol className="flex items-center space-x-2 text-sm">
//         <li>
//           <Link href="/" className="text-gray-500 hover:text-gray-700">
//             Home
//           </Link>
//         </li>
//         <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
//         <li>
//           <Link href="/bounties" className="text-gray-500 hover:text-gray-700">
//             Bounties
//           </Link>
//         </li>
//         <ChevronRight className="w-4 h-4 text-gray-400 mx-1" />
//         <li key={href} className="flex items-center">
//                 <Link href={href} className="text-gray-500 hover:text-gray-700">
//                 {label}
//               </Link>
//               </li>


//         </ol>
//       </nav>
//     )
//   }
  
// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function Page({ params }: { params: { slug: string } }) {
    console.log("params: ", params)
    // return <div>My Post: {params.slug}</div>
    return (<>
    {/* <BountyBreadcrumb href={params.slug} label={params.slug} /> */}
    <BountyPage />
    </>)
  }
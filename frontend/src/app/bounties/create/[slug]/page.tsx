'use client';



// import Link from "next/link"
// import { ChevronRight } from "lucide-react"

import CreateBountyDetail from './create-bounty'
export default function Page({ params }: { params: { slug: string } }) {
    console.log("params: ", params)
    return (<>
    <CreateBountyDetail />
    </>)
  }
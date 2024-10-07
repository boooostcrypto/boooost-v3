"use client";
// import { useRouter } from "next/navigation";
// next/navigation
// import { useEffect,
//   // useState,
// } from "react";
// import { usePrivy,
//   // getAccessToken  
//  } from "@privy-io/react-auth";
import CommunityCreated from './community-created'
// import Head from "next/head";

// async function verifyToken() {
//   const url = "/api/verify";
//   const accessToken = await getAccessToken();
//   const result = await fetch(url, {
//     headers: {
//       ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : undefined),
//     },
//   });

//   return await result.json();
// }

export default function Saved() {
  // const [verifyResult, setVerifyResult] = useState();
  // const router = useRouter();
  // const {
  //   ready,
  //   authenticated,
  //   // user,
  //   // logout,
  //   // linkEmail,
  //   // linkWallet,
  //   // unlinkEmail,
  //   // linkPhone,
  //   // unlinkPhone,
  //   // unlinkWallet,
  //   // linkGoogle,
  //   // unlinkGoogle,
  //   // linkTwitter,
  //   // unlinkTwitter,
  //   // linkDiscord,
  //   // unlinkDiscord,
  // } = usePrivy();

//   useEffect(() => {
//     if (ready && !authenticated) {
//       // router.push("/");
      
//     }
// }, [ready, authenticated]);


  return (
    <>
    <CommunityCreated />
    </>

  )
}

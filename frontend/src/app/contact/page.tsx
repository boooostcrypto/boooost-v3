"use client";
// import { useRouter } from "next/navigation";
// next/navigation
import { useEffect,
  // useState,
} from "react";
import { usePrivy,
  // getAccessToken  
 } from "@privy-io/react-auth";
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

export default function Contact() {
  // const [verifyResult, setVerifyResult] = useState();
  // const router = useRouter();
  const {
    ready,
    authenticated,
    // user,
    logout,
    // linkEmail,
    // linkWallet,
    // unlinkEmail,
    // linkPhone,
    // unlinkPhone,
    // unlinkWallet,
    // linkGoogle,
    // unlinkGoogle,
    // linkTwitter,
    // unlinkTwitter,
    // linkDiscord,
    // unlinkDiscord,
  } = usePrivy();

  useEffect(() => {
    if (ready && !authenticated) {
      // router.push("/");
      
    }
}, [ready, authenticated]);


  return (
    <>

    
          <>
            <div className="flex flex-row justify-between">
              <h1 className="text-2xl font-semibold">Contact</h1>
              <button
                onClick={logout}
                className="text-sm bg-violet-200 hover:text-violet-900 py-2 px-4 rounded-md text-violet-700"
              >
                Create a new project
              </button>
            </div>
            <div className="mt-12 flex gap-4 flex-wrap">
              bodybody
            </div>

          </>
    </>
  )
}

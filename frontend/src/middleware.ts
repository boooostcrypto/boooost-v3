import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { PrivyClient } from "@privy-io/server-auth";

const PRIVY_APP_ID = process.env.NEXT_PUBLIC_PRIVY_APP_ID;
const PRIVY_APP_SECRET = process.env.PRIVY_APP_SECRET;

if (!PRIVY_APP_ID || !PRIVY_APP_SECRET) {
  throw new Error("Missing Privy environment variables");
}

const client = new PrivyClient(PRIVY_APP_ID, PRIVY_APP_SECRET);

function extractToken(request: NextRequest): string | null {
  const headerAuthToken = request.headers.get('authorization')?.replace(/^Bearer /, "");
  const cookieAuthToken = request.cookies.get('privy-token')?.value;
  return cookieAuthToken || headerAuthToken || null;
}

export async function middleware(request: NextRequest) {
  const authToken = extractToken(request);
  
  if (!authToken) {
    return NextResponse.json({ error: "Missing auth token" }, { status: 401 });
  }

  try {
    const claims = await client.verifyAuthToken(authToken);
    // トークンが有効な場合、リクエストを続行
    const requestHeaders = new Headers(request.headers)
    requestHeaders.set('x-user-id', claims.userId)
    
    return NextResponse.next({
      request: {
        headers: requestHeaders,
      },
    })
  } catch (e) {
    console.error("Authentication error:", e);
    return NextResponse.json({ error: "Authentication failed" }, { status: 401 });
  }
}

// ミドルウェアを適用するパスを指定
export const config = {
  matcher: '/api/:path*',
}
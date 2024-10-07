'use client';

import {PrivyProvider} from '@privy-io/react-auth';

export default function Providers({children}: {children: React.ReactNode}) {
  return (

<>
    <PrivyProvider
        appId={process.env.NEXT_PUBLIC_PRIVY_APP_ID || ""}
        config={{
          appearance: {
            theme: 'light',
            // accentColor: '#676FFF',
            accentColor: '#63',
            // logo: '/logo.png',
            logo: '/favicon.ico',
          },
          embeddedWallets: {
            createOnLogin: "all-users",
          },
        }}
    >

      {children}
    </PrivyProvider>
    </>
  );
}
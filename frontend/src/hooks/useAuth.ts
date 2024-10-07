'use client'

import { usePrivy, User as PrivyUser, useSolanaWallets, WalletWithMetadata, getAccessToken } from '@privy-io/react-auth';
import { useEffect, useState } from 'react';

type User = {
  id: number;
  privyId: string;
  name: string;
};

export function useAuth() {
  const { ready, authenticated, user, login, logout: privyLogout } = usePrivy();
  // const {wallets: EthereumWallets} = useWallets();
  const { createWallet} = useSolanaWallets();
  const [isLoading, setIsLoading] = useState(true);
  const [dbUser, setDbUser] = useState<User | null>(null);

  useEffect(() => {
    if (ready) {
      if (authenticated && user) {
        handleAuthentication(user);
        
      } else {
        setIsLoading(false);
        setDbUser(null);
      }
    }
  }, [ready, authenticated, user]);

  const handleAuthentication = async (privyUser: PrivyUser) => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/user', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          privyId: privyUser.id,
          name: privyUser.email || 'Unknown',
        }),
      });
      const hasExistingSolanaWallet = !!privyUser.linkedAccounts.find(
        (account): account is WalletWithMetadata =>
          account.type === 'wallet' &&
          account.walletClientType === 'privy' &&
          account.chainType === 'solana'
      );
      if (!hasExistingSolanaWallet) {
        await createWallet();
      }

      if (response.ok) {
        const userData: User = await response.json();
        setDbUser(userData);
      } else {
        console.error('Error creating/fetching user');
      }
      await registerWallet();
    } catch (error) {
      console.error('Error handling authentication:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const registerWallet = async () => {
    const accessToken = await getAccessToken();
    try {
      const response = await fetch('/api/wallets', {
        method: 'GET',
        headers: { 
          'Content-Type': 'application/json',
          ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
        },
        
      });
  
      if (!response.ok) {
        throw new Error('Error registering wallet');
      }
    } catch (error) {
      console.error('Error registering wallet:', error);
    }
  };

  const logout = () => {
    setDbUser(null);
    privyLogout();
  };

  return {
    ready,
    isLoading, 
    authenticated, 
    user: dbUser, 
    login, 
    logout 
  };
}
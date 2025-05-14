import { SignedIn, SignedOut, SignInButton, UserButton } from '@clerk/nextjs'
import Link from 'next/link'
import React from 'react'
import { Button } from './ui/button'
import { HeartIcon } from 'lucide-react'

async function Header() {
  return <header className="flex items-center justify-between p-4 border-b border-gray-200">
      <div>
        <Link href="/">
          <h2>Creator site</h2>
        </Link>
      </div>

      <div>
        <SignedIn>
          <UserButton />
        </SignedIn>

        <SignedOut>
          <Button
            asChild
            variant="outline"
            className="px-4 py-2 bg-red-500 text-white rounded-lg"
          >
            <div>
            <SignInButton mode="modal"/>
            <HeartIcon className="w-4 h-4" />
            </div>
          </Button>
        </SignedOut>
      </div>
  </header>
  
}

export default Header

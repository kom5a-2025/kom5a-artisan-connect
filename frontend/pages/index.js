import React from 'react';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';

const clerkFrontendApi = process.env.NEXT_PUBLIC_CLERK_FRONTEND_API;

export default function Home() {
  return (
    <ClerkProvider frontendApi={clerkFrontendApi}>
      <SignedIn>
        <div>
          <h1>Welcome to the Next.js App with Clerk Authentication</h1>
        </div>
      </SignedIn>
      <SignedOut>
        <RedirectToSignIn />
      </SignedOut>
    </ClerkProvider>
  );
}

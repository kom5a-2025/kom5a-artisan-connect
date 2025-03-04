import React from 'react';
import ReactDOM from 'react-dom';
import { ClerkProvider, RedirectToSignIn, SignedIn, SignedOut } from '@clerk/clerk-react';
import App from './App';

const clerkFrontendApi = process.env.REACT_APP_CLERK_FRONTEND_API;

ReactDOM.render(
  <ClerkProvider frontendApi={clerkFrontendApi}>
    <SignedIn>
      <App />
    </SignedIn>
    <SignedOut>
      <RedirectToSignIn />
    </SignedOut>
  </ClerkProvider>,
  document.getElementById('root')
);

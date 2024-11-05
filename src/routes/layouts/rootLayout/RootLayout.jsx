import '/rootLayout.css'
import { ClerkProvider } from '@clerk/clerk-react';

const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error("Mising publishable Key")
}

const RootLayout =()=> {
    return(
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
        <div className="rootLayout">
            <header>
                <Link to ="/" className="logo">
                <img src="/logo.png" alt=""/>
                <span>ADITI AI</span>
                </Link>
                <div className="user">
                <SignedOut>
        <SignInButton />
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
                </div>
            </header>
            <main>
                <Outlet/>
            </main>
            </div>
            </ClerkProvider>
            ); 
        }; 

export default RootLayout
                      
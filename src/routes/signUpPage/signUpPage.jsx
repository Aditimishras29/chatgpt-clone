import { SignUp } from '@clerk/clerk-react'
import './signUpPage.css'

const SignUpPage = () => {
  return (
    <div className="signInPage">
      <SignUp path="/sign-up" />
    </div>
  )
}

export default SignUpPage
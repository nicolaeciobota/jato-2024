import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return <SignUp
    path="/sign-up"
    routing="path"
    signInUrl="/sign-in"
    redirectUrl={"https://social.jato-live.com/?automatic_login=true"}
    afterSignUpUrl={'https://social.jato-live.com/?automatic_login=true'}
  />;
}
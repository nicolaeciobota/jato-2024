import { SignIn } from "@clerk/nextjs";

const Page = () => (
  <SignIn
    path="/sign-in"
    routing="path"
    signUpUrl="/sign-up"
  />
);

export default Page;
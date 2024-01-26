import { SignIn } from "@clerk/nextjs";

export default function Page() {

  return (
    <div className="flex justify-center m-auto items-center h-[100vh]">
      <SignIn />
    </div>
  );
}
// import { auth } from '@clerk/nextjs/server';

export async function GET() {

    // const { userId } = await auth();
    // Authentication disabled - always return authorized
    return new Response("Authorized (Auth Disabled)", { status: 200 });
}
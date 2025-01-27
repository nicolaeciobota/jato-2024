import {
  // VERSION: 4.29.3
  // authMiddleware,
  clerkMiddleware,
  createRouteMatcher,
} from "@clerk/nextjs/server";


// VERSION: 4.29.3
// export default authMiddleware({
//   ignoredRoutes: (req) => {
//     const pathname = req.nextUrl.pathname;
//     const locale = pathname.split('/')[1];
//     return (req.url.includes(`/${locale}/home`))
//   },
//   publicRoutes: ['/api/revalidateCache', '/']
// });


const isPublicRoute = createRouteMatcher(['/sign-in(.*)', '/sign-up(.*)', '/en/home', '/', '/api/revalidateCache'])
export default clerkMiddleware(async (auth, req) => {
  if (!isPublicRoute(req)) {
    await auth.protect()
  }

})

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
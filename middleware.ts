import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  ignoredRoutes: (req) => {
    const pathname = req.nextUrl.pathname;
    const locale = pathname.split('/')[1];
    return (req.url.includes(`/${locale}/home`))
  },
  publicRoutes: ['/api/revalidateCache', '/']
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
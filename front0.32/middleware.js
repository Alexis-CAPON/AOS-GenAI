import authConfig from "@/auth.config";
import { currentUser } from "@/lib/auth";
import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  authRoutes,
  publicRoutes,
} from "@/routes";
import NextAuth from "next-auth";

const { auth } = NextAuth(authConfig);

export default auth(async (req) => {
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isAdminRoute = nextUrl.pathname.startsWith("/admin");
  const isDashboardRoute = nextUrl.pathname.startsWith("/dashboard");

  // Before to put in production, check if threre is no secure problem to put auth middleware
  // asynchronous function
  const user = await currentUser();
  const isAdmin = user?.role === "ADMIN";
  const isWhitelisted = user?.isWhitelisted;

  if (isApiAuthRoute) {
    return null;
  }

  if (isAdminRoute) {
    if (!isAdmin) {
      return Response.redirect(new URL("/unauthorized", nextUrl));
    }
  }

  if (isDashboardRoute) {
    if (isLoggedIn && !isWhitelisted) {
      return Response.redirect(new URL("/whitelist", nextUrl));
    }
  }

  if (isAuthRoute) {
    if (isLoggedIn) {
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return null;
  }

  if (!isLoggedIn && !isPublicRoute) {
    return Response.redirect(new URL("/login", nextUrl));
  }

  return null;
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';

// Create a route matcher for protected routes
const isProtectedRoute = createRouteMatcher([
  '/dashboard(.*)', // Protect the dashboard and all routes under it
  // Add any other protected routes here
]);

// Configure Clerk middleware with protection
export default clerkMiddleware(async (auth, req) => {
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
  
});

// Keep the original matcher configuration from Clerk
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};
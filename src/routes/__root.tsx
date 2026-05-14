import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";

import appCss from "../styles.css?url";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScrollProvider } from "@/components/smooth-scroll";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4">
      <p className="font-display text-fluid-hero leading-none text-accent">404</p>
      <p className="mt-2 text-xs uppercase tracking-[0.3em] text-muted-foreground">Page not found</p>
      <Link to="/" className="mt-8 border border-foreground px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background">
        Return home
      </Link>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background px-4 text-center">
      <p className="font-display text-fluid-display">Something broke</p>
      <p className="mt-2 max-w-md text-sm text-muted-foreground">{error.message}</p>
      <div className="mt-8 flex gap-3">
        <button
          onClick={() => { router.invalidate(); reset(); }}
          className="border border-foreground px-6 py-3 text-xs uppercase tracking-[0.3em] hover:bg-foreground hover:text-background"
        >
          Try again
        </button>
        <a href="/" className="border border-border px-6 py-3 text-xs uppercase tracking-[0.3em] hover:border-foreground">
          Home
        </a>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Portfolio — Cinematic Template" },
      { name: "description", content: "A cinematic portfolio template ready for your content." },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600;700&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <SmoothScrollProvider>
        <SiteHeader />
        <main>
          <Outlet />
        </main>
        <SiteFooter />
      </SmoothScrollProvider>
    </QueryClientProvider>
  );
}

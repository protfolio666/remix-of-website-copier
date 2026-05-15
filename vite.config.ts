// @lovable.dev/vite-tanstack-config already includes the following — do NOT add them manually
// or the app will break with duplicate plugins:
//   - tanstackStart, viteReact, tailwindcss, tsConfigPaths, cloudflare (build-only),
//     componentTagger (dev-only), VITE_* env injection, @ path alias, React/TanStack dedupe,
//     error logger plugins, and sandbox detection (port/host/strictPort).
// You can pass additional config via defineConfig({ vite: { ... } }) if needed.
import netlify from "@netlify/vite-plugin-tanstack-start";
import { defineConfig } from "@lovable.dev/vite-tanstack-config";

// Redirect TanStack Start's bundled server entry to src/server.ts (our SSR error wrapper).
// Netlify: @netlify/vite-plugin-tanstack-start prepares the production bundle; disable the
// Cloudflare Workers build plugin (otherwise wrangler output wins over Netlify’s layout).
// Netlify plugin only during production builds — on Windows, loading it in `vite dev` can
// throw EPERM while updating %AppData%/netlify/Config (see Netlify dev-utils GlobalConfigStore).
const netlifyPlugins =
  process.env.npm_lifecycle_event === "build" || process.env.NETLIFY === "true" ? [netlify()] : [];

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  cloudflare: false,
  plugins: netlifyPlugins,
});

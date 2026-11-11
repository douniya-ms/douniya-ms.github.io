import { defineConfig } from 'vite'
import { devtools } from '@tanstack/devtools-vite'
import { paraglideVitePlugin } from '@inlang/paraglide-js'

import { tanstackStart } from '@tanstack/react-start/plugin/vite'

import viteReact from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

const config = defineConfig({
  resolve: { tsconfigPaths: true },
  plugins: [
    devtools(),
    paraglideVitePlugin({
      project: './project.inlang',
      outdir: './src/paraglide',
      strategy: ['url', 'baseLocale'],
    }),
    tailwindcss(),
    tanstackStart({
      prerender: {
        enabled: true,
        crawlLinks: true,
        failOnError: true,
      },
      // Locale roots + French case studies. The crawler can't find these on its own:
      // the Work page only renders the current project, and auto-discovery only
      // adds the English paths. Add a line here for every new project.
      pages: [
        '/',
        '/fr',
        '/fr/work/avatar',
        '/fr/work/cadence',
        '/fr/work/yalla-agent',
      ].map((path) => ({ path })),
    }),
    viteReact(),
  ],
})

export default config

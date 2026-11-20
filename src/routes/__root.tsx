import { HeadContent, Link, Scripts, createRootRoute } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'

import { WorkNavigationProvider } from '#/components/WorkNavigation'
import { AnalyticsScript, PageviewTracker } from '#/components/Analytics'
import { getLocale } from '#/paraglide/runtime'
import { m } from '#/paraglide/messages'
import { seo } from '#/lib/seo'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  beforeLoad: async () => {
    // Other redirect strategies are possible; see
    // https://github.com/TanStack/router/tree/main/examples/react/i18n-paraglide#offline-redirect
    if (typeof document !== 'undefined') {
      document.documentElement.setAttribute('lang', getLocale())
    }
  },

  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      { name: 'theme-color', content: '#6d8f63' },
      // Google Search Console ownership check. Keep it: removing it unverifies the site.
      { name: 'google-site-verification', content: 'BDg6Y6viLHVEQNAeBaxaZW1stmSs8jVAk7ggRwrqBkA' },
      // Defaults; each page sets its own title, description and URLs
      ...seo({ title: m.seo_home_title(), description: m.seo_home_description(), path: '/' }).meta,
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      // "DU NIA." monogram (files in public/, redrawn from src/assets/Douniya monogram.png)
      { rel: 'icon', href: '/favicon.ico', sizes: '48x48' },
      { rel: 'icon', href: '/favicon-32.png', type: 'image/png', sizes: '32x32' },
      { rel: 'icon', href: '/icon-192.png', type: 'image/png', sizes: '192x192' },
      { rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
    ],
  }),
  notFoundComponent: NotFound,
  shellComponent: RootDocument,
})

function NotFound() {
  return (
    <main className="flex min-h-dvh flex-col items-center justify-center gap-6 px-(--gutter) text-center">
      <p className="type-mono uppercase text-moss-ink">404</p>
      <h1 className="type-heading text-ink">Page not found</h1>
      <Link to="/" className="type-body text-marine underline">
        Return home
      </Link>
    </main>
  )
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang={getLocale()}>
      <head>
        <HeadContent />
        <AnalyticsScript />
      </head>
      <body>
        {/* Above every layout, so the Work page remembers its project across pages */}
        <WorkNavigationProvider>{children}</WorkNavigationProvider>
        <PageviewTracker />
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

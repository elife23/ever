import MainFooter from '@/components/global/mainFooter'
import MainNavBar from '@/components/global/mainNavBar'
import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import { NextPage } from 'next'
import { SessionProvider } from 'next-auth/react'
import type { AppProps } from 'next/app'
import { useRouter } from 'next/router'
import DashboardLayout from './dashboard/DashboardLayout'
import dashboardPaths from '@/utils/routes/dashboard_routes'
import { UserContextProvider } from '@/utils/context/User'

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const currentPage = router.pathname;

  // All routes of our dashboard section
  const dashboardRoutes = Object.values(dashboardPaths);

  // Verify if the current page is a page of the dashboard
  const isDashboardPage = dashboardRoutes.includes(currentPage);

  if (isDashboardPage) {
    return (
      <>
        <DashboardLayout>
          <UserContextProvider>
            <Component {...pageProps} />
          </UserContextProvider>
        </DashboardLayout>
      </>
    );
  }

  return (
    <>
      <SessionProvider session={pageProps.session}>
        <NextUIProvider>
          <UserContextProvider>
            <MainNavBar />
            <Component {...pageProps} />
            <MainFooter />
          </UserContextProvider>
        </NextUIProvider>
      </SessionProvider>
    </>
  )
}

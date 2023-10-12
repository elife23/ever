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
          <Component {...pageProps} />
        </DashboardLayout>
      </>
    );
  }
  
  return (
    <>
    <SessionProvider session={pageProps.session}>
      <NextUIProvider>
        <MainNavBar />
        <Component {...pageProps} />
        <MainFooter />
      </NextUIProvider>
    </SessionProvider>
    </>
  )
}

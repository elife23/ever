import MainNavBar from '@/components/global/mainNavBar'
import '@/styles/globals.css'
import { NextUIProvider } from '@nextui-org/react'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <NextUIProvider>
        <MainNavBar />
        <Component {...pageProps} />
      </NextUIProvider>
    </>
  )
}

import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Header from '../components/Header'
import { DarkModeContextProvider } from '../context/DarkModeContext'
import { Analytics } from '@vercel/analytics/react'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>LcsGomes Portfolio</title>
      </Head>

      <DarkModeContextProvider>
        <Header />
        <Component {...pageProps} />
        <Analytics />
      </DarkModeContextProvider>
    </>
  )
}

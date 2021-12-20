import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React from 'react'
import Header from '../components/Header'

function MyApp ({ Component, pageProps }: AppProps) {
  return (
    <React.Fragment>
      <Header />
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp

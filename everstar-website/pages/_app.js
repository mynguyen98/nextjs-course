import Head from 'next/head'
import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import Layout from '../components/layout/layout'
import { useEffect } from 'react'
function MyApp({ Component, pageProps }) {
  // useEffect(() => {
  //   import('bootstrap/dist/js/bootstrap.js')
  // }, [])
  return (
    <Layout>
      <Head>
        <meta name='viewport' content='width=device-width, initial-scale=1' />
      </Head>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp

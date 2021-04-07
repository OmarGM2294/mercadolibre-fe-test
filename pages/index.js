import Head from 'next/head'

import NavBar from '../src/components/NavBar'
import MainState from '../src/components/MainState'

export default function Home() {
  return (
    <>
      <Head>
        <title>MercadoLibre</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <MainState />
    </>
  )
}

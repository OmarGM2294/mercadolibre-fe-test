import Head from 'next/head'
import NavBar from '../src/components/NavBar'

export default function Home() {
  return (
    <>
      <Head>
        <title>MercadoLibre</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
    </>
  )
}

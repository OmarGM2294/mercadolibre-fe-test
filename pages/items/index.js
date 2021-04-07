import React from 'react'
import Head from 'next/head'

import NavBar from '../../src/components/NavBar'
import Items from '../../src/containers/Items'
import Breadcrumb from '../../src/components/Breadcrumb'

import { fetcher } from '../../src/utils/fetcher'

const Index = (props) => {
  return (
    <>
      <Head>
        <title>MercadoLibre - {props.search}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Breadcrumb data={props.categories} />
      <Items data={props.items} />
    </>
  )
}

export async function getServerSideProps(context) {  
  const data = await fetcher(`http://${context.req.headers.host}/api/items?search=${context.query.search}`)

  return {
    props: {
      search: context.query.search,
      items: data.items,
      categories: data.categories
    }
  }
}

export default Index
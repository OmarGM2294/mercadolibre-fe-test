import React from 'react'
import Head from 'next/head'

import NavBar from '../../src/components/NavBar'
import Description from '../../src/components/Description'
import Breadcrumb from '../../src/components/Breadcrumb'

import { fetcher } from '../../src/utils/fetcher'

const Id = (props) => {
  return (
    <>
      <Head>
        <title>MercadoLibre - {props.item.title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <NavBar />
      <Breadcrumb data={props.categories} />
      <Description data={props.item} />
    </>
  )
}

export async function getServerSideProps(context) {  
  const data = await fetcher(`http://${context.req.headers.host}/api/items/${context.query.id}`)

  return {
    props: {
      item: data.item,      
      categories: data.categories
    }
  }
}

export default Id
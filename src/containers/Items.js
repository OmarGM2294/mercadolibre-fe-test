import React from 'react'

import Item from '../components/Item'
import EmptyState from '../components/EmptyState'

import styles from '../../styles/components/Items.module.scss'

const Items = (props) => (
  <main className={styles.container}>
    { props.data.length > 0 ?
      <>
        { props.data.map((item, index) => (
          <Item data={item} key={index} />
        )) }
      </>
    :
      <EmptyState />
    }
  </main>
)

export default Items
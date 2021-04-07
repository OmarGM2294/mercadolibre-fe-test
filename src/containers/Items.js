import React from 'react'

import Item from '../components/Item'

import styles from '../../styles/components/Items.module.scss'

const Items = (props) => (
  <main className={styles.container}>
    { props.data.map((item, index) => (
      <Item data={item} key={index} />
    )) }
  </main>
)

export default Items
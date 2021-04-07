import React from 'react'
import Image from 'next/image'

import styles from '../../styles/components/Item.module.scss'

const Item = (props) => (
  <article className={styles.item}>
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={props.data.picture}
        alt={props.data.title}
        width={180}
        height={180}
      />
      <div className={styles.info}>
        <div className={styles.status}>
          <h2>$ {props.data.price.amount}</h2>
          <span>{props.data.state_name}</span>
        </div>
        <p>{props.data.title}</p>
      </div>
    </div>
  </article>
)

export default Item
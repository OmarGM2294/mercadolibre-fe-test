import React from 'react'
import Image from 'next/image'

import styles from '../../styles/components/Description.module.scss'

const Description = (props) => (
  <main className={styles.description}>
    <div className={styles.container}>
      <Image
        className={styles.image}
        src={props.data.picture}
        height={680}
        width={680}
      />
      <div className={styles.info}>
        <span>
          {props.data.condition === 'new' ? 'Nuevo' : 'Usado'} - {props.data.sold_quantity} vendidos
        </span>
        <h1 className="h2">{ props.data.title }</h1>
        <h2 className="h1">
          $ { props.data.price.amount }
          <span>
            {(props.data.price.decimals + '0').slice(-2)}
          </span>
        </h2>
        <button className="button">
          Comprar
        </button>
      </div>
    </div>
    <div className={styles.productDescription}>
      <h3>Descripción del producto</h3>
      <p>
        {props.data.description}
      </p>
    </div>
  </main>
)

export default Description
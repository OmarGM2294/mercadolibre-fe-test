import Image from 'next/image'

import styles from '../../styles/components/MainState.module.scss'

const MainState = () => (
  <div className={styles.container}>
    <Image
      src="/imgs/logo.png"
      height={72}
      width={106}
    />
    <h1>
      Busca lo que necesites<br/>
      Prueba Front End - MercadoLibre<br/>
      Omar Gonzalez
    </h1>
  </div>
)

export default MainState
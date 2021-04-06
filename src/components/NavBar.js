import React from 'react'
import Link from 'next/link'
import styles from '../../styles/components/NavBar.module.scss'

const NavBar = () => {
  return (
    <header className={styles.nav}>
      <nav className={styles.container}>
        <Link href="/">
          <a>
            <img
              src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__small.png"
              alt="logo" />
          </a>
        </Link>
        <form className={styles.search}>
          <input
            type="text"
            autoFocus
            aria-label="Busca lo que necesitas"
            placeholder="Nunca dejes de buscar" />
          <button
            className={styles.btn}
            type="submit">
            <div
              role="img"
              aria-label="Buscar"
              className={styles.img} />
          </button>
        </form>
      </nav>
    </header>
  )
}

export default NavBar
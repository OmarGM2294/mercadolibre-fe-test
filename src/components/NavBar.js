import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../../styles/components/NavBar.module.scss'

const NavBar = () => {
  return (
    <header className={styles.nav}>
      <nav className={styles.container}>
        <Link href="/">
          <a className={styles.link}>
            <Image
              className={styles.logo}
              src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.3/mercadolibre/logo__small.png"
              alt="logo"
              width={44}
              height={32}
            />
          </a>
        </Link>
        <form
          className={styles.search}
          action="/items"
          method="get">
          <input
            type="text"
            autoFocus
            name="search"
            aria-label="Busca lo que necesitas"
            placeholder="Nunca dejes de buscar" />
          <button
            className={styles.btn}
            aria-label="Buscar"
            type="submit">
            <Image
              src="/imgs/search.svg"
              alt="Buscar"
              height={16}
              width={16}
            />
          </button>
        </form>
      </nav>
    </header>
  )
}

export default NavBar
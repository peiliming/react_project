import { FC } from 'react'
import Link from 'next/link'
import styles from "../../styles/Hamburger.module.scss";
import React, {useState} from "react"

const MENUS = [
  {
    path: '/',
    title: 'ホーム'
  },
  {
    path: '/business',
    title: '主要事業'
  },
  {
    path: '/product',
    title: '取り扱う商品'
  },
  {
    path: '/profile',
    title: '会社概要'
  },
  {
    path: '/organization',
    title: '組織図'
  }
]

const Hamburger: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }
  return (
    <React.Fragment>
      <header id="header" className={styles.header}>
        <div className={styles.logo}>
          <Link href="/" className={styles.logo}>
            ハンバーガー♡
          </Link>
        </div>
        <nav>
          <ul>
            {MENUS.map ((menu, index) => {
              return (
                <li key={index}>
                  <Link href={menu.path}>
                  <span>{menu.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className={styles.container}>
          <div className={styles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? styles.open : undefined}></span>
            <span className={openMenu ? styles.open : undefined}></span>
            <p className={openMenu ? styles.open : undefined}>Menu</p>
          </div>
        </div>
      </header>
      <div className={`${styles.drawerMenu} ${openMenu ? styles.open : undefined}`}>
        <ul>
          <div className={styles.close} onClick={() => menuFunction()}>
            <span></span>
            <span></span>
            <p>Close</p>
          </div>
          {MENUS.map ((menu, index) => {
              return (
                <li key={index}>
                  <Link href={menu.path}>
                  <p className={styles.mainTitle}>{menu.title}</p>
                  </Link>
                </li>
              )
            })}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default Hamburger
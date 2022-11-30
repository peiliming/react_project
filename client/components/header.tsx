import { FC } from 'react'
import Link from 'next/link'
import styles from '../styles/Home.module.scss'
import headerStyles from '../styles/Header.module.scss'
import navStyles from '../styles/Nav.module.scss'
import Image from 'next/image'
import Hamburger from './hamburger_nav'
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

const Header: FC = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuFunction = () => {
    setOpenMenu(!openMenu);
  }

  return (
    <section className={headerStyles.header__container}>
      <header id="header" className={headerStyles.header}>
        <div className={headerStyles.header__inner}>
          <div className={headerStyles.header__logo}>
              <Link className={headerStyles.header__a} href="/">
                <Image 
                  className={headerStyles.header__img}
                  src="/assets/img/headerIcon/menu.png"
                  alt="ロゴ"
                  loading="eager"
                  width={35}
                  height={35}
                  priority
                />
              </Link>
          </div>
          
          <div className={headerStyles.header__nav}>
            <nav>
              <ul>
                {MENUS.map((menu, index) => {
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
          </div>

          <div className={headerStyles.header__right__content}>
            <div className={headerStyles.header__button}>
                <Link href="/">お問い合わせ</Link>
            </div>
          </div>
        </div>

        <div className={headerStyles.header__inner__sp}>
          <div className={headerStyles.humburger} onClick={() => menuFunction()}>
            <span className={openMenu ? headerStyles.open : undefined}></span>
            <span className={openMenu ? headerStyles.open : undefined}></span>
            <p className={openMenu ? headerStyles.open : undefined}>Menu</p>
          </div>
        </div>




      </header>
      {/* <Hamburger /> */}

      <div className={`${headerStyles.drawerMenu} ${openMenu ? headerStyles.open : undefined}`}>
        <ul>
          <div className={headerStyles.close} onClick={() => menuFunction()}>
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

    </section>
  )
}

export default Header
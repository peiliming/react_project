import Header from './header'
import styles from '../styles/Home.module.scss'
import { ReactNode } from 'react'

type LayoutProps = {
  children: ReactNode
}

export default function Layout( {children}: LayoutProps ) {
  return (
    <div>
      <Header />
      <main className={styles.main}>{children}</main>
    </div>
  )
}
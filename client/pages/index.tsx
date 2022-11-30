import Head from 'next/head'
import type { NextPageWithLayout } from './_app'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import Layout from '../components/layout'
import Seo from '../components/meta'
import React from 'react'

const Home: NextPageWithLayout = () => {
  return (
    <section>
      <h1>テストテストテスト</h1>
    </section>
  )
}

export default Home

Home.getLayout = (page: React.ReactElement) => {
  return (
    <>
      <Layout>
        <Seo
          pageTitle={'漢松堂'}
          pageDescription={'Kanshodo'}
        />
        {page}
      </Layout>
    </>
  )
}
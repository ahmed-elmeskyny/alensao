import Head from 'next/head'
import styles from '../styles/Home.module.scss'


import Menu from "../components/Menu/menu";

import Header from "../components/Header/header";
export default function Home() {
  return (
    <div >
      <Head>
        <title>Alensao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container} >
        <Header></Header>
      </div>
    </div>
  )
}

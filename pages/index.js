import Head from 'next/head';

//components
import Layout from "../components/Layout/layout";

//style 
import styles from "../styles/Home.module.scss";

//comonents
import {FaPhoneAlt} from "react-icons/fa";
import {FiMail} from "react-icons/fi";


export default function Home() {
  return (
    <div >
      <Head>
        <title>Alensao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <div className={styles.infoContainer}>
          <div className={styles.info}>
            <FiMail className={styles.icon}></FiMail>
            <p>Alensao@gmail.com</p>
          </div>
          <div className={styles.info}>
            <FaPhoneAlt className={styles.icon}></FaPhoneAlt>
            <p>(+212) 679142796 </p>
          </div>
        </div>
      </Layout>

    </div>
  )
}

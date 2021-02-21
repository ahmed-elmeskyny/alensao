import Head from 'next/head';

//components
import Layout from "../components/Layout/layout";
import Slider from "../components/Slider/slider";

//style 
import styles from "../styles/Home.module.scss";

//react-icons
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
            <div className={styles.info} style={{margin:"0"}}>
                <FiMail className={styles.icon}></FiMail>
                <p>Alensao@gmail.com</p>
            </div>
            <div className={styles.info}>
               <FaPhoneAlt className={styles.icon}></FaPhoneAlt>
               <p>(+212) 679142796 </p>
            </div>
        </div>
        <Slider></Slider>
      </Layout>

    </div>
  )
}

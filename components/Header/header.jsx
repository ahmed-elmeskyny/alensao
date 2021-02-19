//next
import Image from "next/image";

//styles
import styles from "./header.module.scss";

//components
import Menu from "../Menu/menu";

//icons
import {BiPhoneCall} from "react-icons/bi";
import {HiOutlineMailOpen} from "react-icons/hi";
import {MdLocationOn} from "react-icons/md";



const Header = () => {

    return(
        <div className={styles.headerContainer}>
                <div className={styles.hero}>
                    <div className={styles.logo}>
                        <Image alt="alensao logo"  src="/logo1.png" width="70px" height="50px"></Image>
                        <div className={styles.text}>
                            <h4><span style={{color:"#0C97B4"}}>A</span><span style={{color:"#EC7207"}}>L</span>ENSAO</h4>
                            <p>Association des lauréats </p>
                        </div>
                    </div>
                    <div className={styles.infoContainer}>
                        <div className={styles.info}>
                            <BiPhoneCall style={{ color:"#0C97B4", fontSize: "32px"}}></BiPhoneCall>
                            <div className={styles.description}>
                                <span>Nous Contactez</span>
                                <p>(+212) 6829516728 </p>
                            </div>
                        </div>
                        <div className={styles.info}>
                        <HiOutlineMailOpen  style={{color:"#0C97B4", fontSize: "32px"}}></HiOutlineMailOpen>
                            <div className={styles.description}>
                                <span>Nous E-mailer</span>
                                <p>alensao2020@gmail.com</p>
                            </div>
                        </div>
                        <div className={styles.info}>
                        <MdLocationOn style={{ color:"#0C97B4", fontSize: "32px"}}></MdLocationOn>
                            <div className={styles.description}>
                                <span>Localisation</span>
                                <p>BP :669 Alquods , Oujda</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.mainSectionContainer}>
                  <div className={styles.filter}>
                      <div className={styles.mainSection}>
                      <Menu></Menu>
                       <div className={styles.text}>
                           <h3>Association Des Lauréats </h3>
                           <h4>de l'ENSAO</h4>
                          <p>Pour un avenir meilleur</p>
                       </div>
                      </div>
                  </div>

                </div>
        </div>
    )
}

export default Header;
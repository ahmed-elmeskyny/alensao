//next
import Image from "next/image";

//style
import styles from "./sideMenu.module.scss";

//components
import ActiveLink from "../ActiveLink/activeLink";

//react-icons
import {RiDashboardFill} from "react-icons/ri";
import {FaFire} from "react-icons/fa";
import {MdEventNote} from "react-icons/md";
import {BsFillChatDotsFill} from "react-icons/bs";
import {MdPermContactCalendar} from "react-icons/md";
import {AiFillQuestionCircle} from "react-icons/ai";
import {FaFacebookSquare} from "react-icons/fa";
import {FaLinkedin} from "react-icons/fa";
import {FaTwitter} from "react-icons/fa";
import {AiFillInstagram} from "react-icons/ai";

const SideMenu = () => {

    return (
        <div className={styles.menuContainer}>
            <div className={styles.menu}>
            <div className={styles.logo}>
                <Image alt="alensao logo" src="/logo1.png" width="25px" height="25px"></Image>
                <h3>ALENSAO</h3>
            </div>
            
                <ul>
                    <li>
                        <ActiveLink href="/" activeClassName={styles.activeLink}>
                            <a><RiDashboardFill style={{fontSize:"25px" , marginRight:"15px"}}></RiDashboardFill>Acceuil</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/about" activeClassName={styles.activeLink}>
                            <a><FaFire style={{fontSize:"25px" , marginRight:"15px"}} ></FaFire>À propos</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/eventBlog" activeClassName={styles.activeLink}>
                            <a><MdEventNote style={{fontSize:"25px" , marginRight:"15px"}} ></MdEventNote>Actualités & Blogs </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/myspace" activeClassName={styles.activeLink}>
                            <a><BsFillChatDotsFill style={{fontSize:"25px" , marginRight:"15px"}} ></BsFillChatDotsFill>MySpace </a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/contact" activeClassName={styles.activeLink}>
                            <a><MdPermContactCalendar style={{fontSize:"25px" , marginRight:"15px"}} ></MdPermContactCalendar>Contact</a>
                        </ActiveLink>
                    </li>
                    <li>
                        <ActiveLink href="/faqs" activeClassName={styles.activeLink}>
                            <a><AiFillQuestionCircle style={{fontSize:"25px" , marginRight:"15px"}} ></AiFillQuestionCircle>FAQs</a>
                        </ActiveLink>
                    </li>
                </ul>
            </div>
            <div className={styles.footer}>
                <div className={styles.social}>
                    <FaFacebookSquare className={styles.icon}></FaFacebookSquare>
                    <FaLinkedin className={styles.icon} ></FaLinkedin>
                    <FaTwitter className={styles.icon} ></FaTwitter>
                    <AiFillInstagram className={styles.icon} ></AiFillInstagram>
                </div>
                <div className={styles.copyRight}>
                    <p>© 2021 Alensao. All rights reserved. </p>
                    <p>By <a>Ahmed Elmeskyny</a></p>
                </div>

            </div>
        </div>
    )
};

export default SideMenu;
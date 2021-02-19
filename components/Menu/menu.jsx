
//styles
import styles from "./menu.module.scss";


//icons
import {FiFacebook} from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";
import {RiLinkedinLine} from "react-icons/ri";
import {FiTwitter} from "react-icons/fi";
const Menu = () => {

    return(
        <div className={styles.menuContainer}>
            <ul>
                <li style={{color:"#0C97B4"}}>Acceuil</li>
                <li>A Propos</li>
                <li>Actualité & Blog</li>
                <li>MySpace</li>
                <li> Contact</li>
                <li>FAQs</li>
            </ul>
            <div className={styles.social}>
                <ul>
                    <li><FiFacebook></FiFacebook></li>
                    <li><AiOutlineInstagram></AiOutlineInstagram></li>
                    <li><RiLinkedinLine></RiLinkedinLine></li>                
                    <li><FiTwitter></FiTwitter></li>
                </ul>
            </div>
        </div>

    )
}

export default Menu;
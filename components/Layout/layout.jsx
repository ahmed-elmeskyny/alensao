//styles
import styles from "./layout.module.scss";

//components
import SideMenu from "../SideMenu/sideMenu";


const Layout = ({children}) => {

    return (
        <div className={styles.container}>
            <div className={styles.menu}>
            <SideMenu></SideMenu>
            </div>
            <div className={styles.mainContainer}>
                {children}
            </div>
        </div>
    )
};


export default Layout;
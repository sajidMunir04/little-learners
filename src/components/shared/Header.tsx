import { useState } from "react";
import styles from "./Header.module.css";


function Header()
{
    const [isMenuOpen,setMenuState] = useState(false);

    const handleClick = () => {
        setMenuState(!isMenuOpen);
    }
    
    return (<div className={`${styles.container} ${isMenuOpen && styles.excessMargin}`}>
        <div className={styles.logoContainer}>
            <img className={styles.logo} src="/Logo(1).svg" alt="brand logo"/>
        </div>
        <nav className={`${styles.navSection} ${isMenuOpen && styles.showHiddenContent}`}>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="/">Home</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="/about">About Us</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="/academics">Academics</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="/admissions">Admissions</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="/studentlife">Student Life</a>
            </div>
            <div className={styles.contactLinkContainer}>
                <a className={styles.link} href="/contact">Contact</a>
            </div>
        </nav>
        <div onClick={handleClick} className={styles.menuButton}>
            <img className={styles.menuBtnImage} src="/images/common/menu.svg"/>
        </div>
    </div>);
}

export default Header;
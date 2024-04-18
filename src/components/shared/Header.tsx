import styles from "./Header.module.css";


function Header()
{
    return (<div className={styles.container}>
        <div className={styles.logoContainer}>
            <img className={styles.logo} src="/Logo(1).svg" alt="brand logo"/>
        </div>
        <nav className={styles.navSection}>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="#">Home</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="#">About Us</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="#">Academics</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="#">Admissions</a>
            </div>
            <div className={styles.linkContainer}>
                <a className={styles.link} href="#">Student Life</a>
            </div>
            <div className={styles.contactLinkContainer}>
                <a className={styles.link} href="#">Contact</a>
            </div>
        </nav>
    </div>);
}

export default Header;
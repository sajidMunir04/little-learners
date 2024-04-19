import styles from "./Header.module.css";


function Header()
{
    return (<div className={styles.container}>
        <div className={styles.logoContainer}>
            <img className={styles.logo} src="/Logo(1).svg" alt="brand logo"/>
        </div>
        <nav className={styles.navSection}>
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
    </div>);
}

export default Header;
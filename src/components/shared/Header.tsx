import styles from "./Header.module.css";


function Header()
{
    return (<div className={styles.container}>
        <div className={styles.logoContainer}>
            <img src="/Logo(1).svg" alt="brand logo"/>
        </div>
        <nav className={styles.navSection}>
            <div className={styles.linkContainer}>
                <a href="#">Home</a>
            </div>
            <div className={styles.linkContainer}>
                <a href="#">About Us</a>
            </div>
            <div className={styles.linkContainer}>
                <a href="#">Academics</a>
            </div>
            <div className={styles.linkContainer}>
                <a href="#">Admissions</a>
            </div>
            <div className={styles.linkContainer}>
                <a href="#">Student Life</a>
            </div>
            <div className={styles.contactLinkContainer}>
                <a href="#">Contact</a>
            </div>
        </nav>
    </div>);
}

export default Header;
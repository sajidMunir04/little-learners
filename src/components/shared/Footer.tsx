import styles from "./Footer.module.css";


function Footer()
{
    return (<div className={styles.container}>
        <div className={styles.subContainer}>
            <div>
                <div>
                    <div>
                        <img src="/Logo(1).png"/>
                    </div>
                    <p>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                </div>
                <div>
                    <div>
                        <div>
                            <img src="/Icon(3).svg"/>
                        </div>
                        <p>hello@littlelearners.com</p>
                    </div>
                    <div>
                        <div>
                            <img src="/Icon(3).svg"/>
                        </div>
                        <p>+91 91813 23 2309</p>
                    </div>
                    <div>
                        <div>
                            <img src="/Icon(3).svg"/>
                        </div>
                        <p>Somewhere in the World</p>
                    </div>
                </div>
            </div>
            <div className={styles.linksContainer}>
                <div>
                    <div>
                        <p className={styles.linkHeading}>Home</p>
                    </div>
                    <div>
                        <a className={styles.linkText} href="#">Features</a>
                        <a className={styles.linkText} href="#">Our Testimonials</a>
                        <a className={styles.linkText} href="#">FAQ</a>
                    </div>
                </div>
                <div>
                <div>
                        <p className={styles.linkHeading}>Home</p>
                    </div>
                    <div>
                        <a className={styles.linkText} href="#">Features</a>
                        <a className={styles.linkText} href="#">Our Testimonials</a>
                        <a className={styles.linkText} href="#">FAQ</a>
                    </div>
                </div>
                <div>
                <div>
                        <p className={styles.linkHeading}>Home</p>
                    </div>
                    <div>
                        <a className={styles.linkText} href="#">Features</a>
                        <a className={styles.linkText} href="#">Our Testimonials</a>
                        <a className={styles.linkText} href="#">FAQ</a>
                    </div>
                </div>
                <div>
                <div>
                        <p className={styles.linkHeading}>Home</p>
                    </div>
                    <div>
                        <a className={styles.linkText} href="#">Features</a>
                        <a className={styles.linkText} href="#">Our Testimonials</a>
                        <a className={styles.linkText} href="#">FAQ</a>
                    </div>
                </div>
            </div>
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>);
}

export default Footer;
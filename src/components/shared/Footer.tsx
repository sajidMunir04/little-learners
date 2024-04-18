import styles from "./Footer.module.css";


function Footer()
{
    return (<div className={styles.container}>
        <div className={styles.subContainer}>
            <div className={styles.infoContainer}>
                <div>
                    <div>
                        <img src="/Logo(1).svg"/>
                    </div>
                    <p className={styles.mottoText}>We believe in the power of play to foster creativity, problem-solving skills, and imagination.</p>
                </div>
                <div className={styles.contactInfoSection}>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactInfoImageContainer}>
                            <img className={styles.contactInfoImage} src="/Icon(3).svg"/>
                        </div>
                        <p className={styles.contactInfoText}>hello@littlelearners.com</p>
                    </div>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactInfoImageContainer}>
                            <img className={styles.contactInfoImage} src="/Icon(3).svg"/>
                        </div>
                        <p className={styles.contactInfoText}>+91 91813 23 2309</p>
                    </div>
                    <div className={styles.contactInfo}>
                        <div className={styles.contactInfoImageContainer}>
                            <img className={styles.contactInfoImage} src="/Icon(3).svg"/>
                        </div>
                        <p className={styles.contactInfoText}>Somewhere in the World</p>
                    </div>
                </div>
            </div>
            <div className={styles.linksContainer}>
                <div className={styles.links}>
                    <p className={styles.linkHeading}>Home</p>
                    <div>
                        <a className={styles.linkText} href="#">Features</a>
                        <a className={styles.linkText} href="#">Our Testimonials</a>
                        <a className={styles.linkText} href="#">FAQ</a>
                    </div>
                </div>
                <div className={styles.links}>
                    <p className={styles.linkHeading}>Home</p>
                    <div>
                        <a className={styles.linkText} href="#">Features</a>
                        <a className={styles.linkText} href="#">Our Testimonials</a>
                        <a className={styles.linkText} href="#">FAQ</a>
                    </div>
                </div>
                <div className={styles.links}>
                    <p className={styles.linkHeading}>Home</p>
                    <div>
                        <a className={styles.linkText} href="#">Features</a>
                        <a className={styles.linkText} href="#">Our Testimonials</a>
                        <a className={styles.linkText} href="#">FAQ</a>
                    </div>
                </div>
                <div>
                    <p className={styles.linkHeading}>Home</p>
                    <div>
                        <a className={styles.linkText} href="#">Features</a>
                        <a className={styles.linkText} href="#">Our Testimonials</a>
                        <a className={styles.linkText} href="#">FAQ</a>
                    </div>
                </div>
            </div>
        </div>
        <div className={styles.brandLinkSection}>
            <div className={styles.policiesSection}>
                <a className={styles.policyLink} href="#">Terms of Service</a>
                <a className={styles.policyLink} href="#">Privacy Policy</a>
                <a className={styles.policyLink} href="#">Cookie Policy</a>
            </div>
            <div className={styles.socialLinkSection}>
                <div className={styles.socialLinkButton}>
                    <img className={styles.socialButtonIcon} src="/images/footer/fb.svg"/>
                </div>
                <div className={styles.socialLinkButton}>
                    <img className={styles.socialButtonIcon} src="/images/footer/fb.svg"/>
                </div>
                <div className={styles.socialLinkButton}>
                    <img className={styles.socialButtonIcon} src="/images/footer/fb.svg"/>
                </div>
            </div>
        </div>
        <div className={styles.footerNoteSection}>
            <p>Copyright © [2023] Little Learners Academy. All rights reserved.</p>
        </div>
    </div>);
}

export default Footer;
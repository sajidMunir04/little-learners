import HeadingSubText from "./HeadingSubText";
import styles from "./PageBanner.module.css";


interface Props {
    subText: string,
    heading: string,
    description: string
}


function PageBanner(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.headingContainer}>
            <div>
                <div className={styles.subContainer}>
                    <p className={styles.text}>{props.subText}</p>
                </div>
                <h1 className={styles.headingText}>{props.heading}</h1>
            </div>
        </div>
        <div className={styles.textContainer}>
            <p className={styles.descriptionText}>{props.description}</p>   
            <div>
                <div className={styles.contactDetail}>
                    <div className={styles.contactImageContainer}>
                        <img src="/images/Subtract.svg"/>
                    </div>
                    <p>hello@littlelearners.com</p>
                </div>
                <div className={styles.contactDetail}>
                    <div className={styles.contactImageContainer}>
                        <img src="/images/Subtract.svg"/>
                    </div>
                    <p>+91 91813 23 2309</p>
                </div>
                <div className={styles.contactDetail}>
                    <div className={styles.contactImageContainer}>
                        <img src="/images/Subtract.svg"/>
                    </div>
                    <p>Somewhere in the World</p>
                </div>
                <div className={styles.contactDetail}>
                    <div className={styles.contactImageContainer}>
                        <img src="/images/Subtract.svg"/>
                    </div>
                    <p>Office Hours - 9am - 6 pm</p>
                </div>
            </div>
        </div>
    </div>);
}

export default PageBanner;
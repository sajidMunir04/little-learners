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
        <div className={styles.absImageContainer}>
            <img className={styles.absImage} src="/images/common/boxes.svg"/>
        </div>
        <div className={styles.headingContainer}>
            <div>
                <div className={styles.subContainer}>
                    <p className={styles.text}>{props.subText}</p>
                </div>
                <h1 className={styles.headingText}>{props.heading}</h1>
            </div>
        </div>
        <div></div>
        <div className={styles.textContainer}>
            <p className={styles.descriptionText}>{props.description}</p> 
            <div className={styles.contactInfoContainer}>
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoImgParent}>
                    <img className={styles.contactInfoImg} src="/images/common/Subtract.svg"/>
                </div>
                <p className={styles.contactInfoText}>hello@littlelearners.com</p>
            </div>  
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoImgParent}>
                    <img className={styles.contactInfoImg} src="/images/common/Subtract.svg"/>
                </div>
                <p className={styles.contactInfoText}>hello@littlelearners.com</p>
            </div>  
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoImgParent}>
                    <img className={styles.contactInfoImg} src="/images/common/Subtract.svg"/>
                </div>
                <p className={styles.contactInfoText}>hello@littlelearners.com</p>
            </div>  
            <div className={styles.contactInfo}>
                <div className={styles.contactInfoImgParent}>
                    <img className={styles.contactInfoImg} src="/images/common/Subtract.svg"/>
                </div>
                <p className={styles.contactInfoText}>hello@littlelearners.com</p>
            </div>    
            </div>  
        </div>
    </div>);
}

export default PageBanner;
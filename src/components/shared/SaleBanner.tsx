import styles from "./SaleBanner.module.css";


interface Props{
    description: string
}


function SaleBanner(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.backgroundContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="/salebannerabstract.png"/>
            </div>
            <div className={styles.secondImageContainer}>
                <img className={styles.secondImage} src="/salebannerabstract.png"/>
            </div>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.largePatternContainer}>
                <img className={styles.largeImage} src="/images/zebra pattern.svg"/>
            </div>
            <div className={styles.textContainer}>
                <p className={styles.description}>{props.description}</p>
                <img className={styles.arrowImage} src="/images/common/arrow.svg"/>
            </div>
            <div className={styles.patternContainer}>
                <img className={styles.image} src="/images/zebra pattern.svg"/>
            </div>
        </div>
    </div>);
}

export default SaleBanner;
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
                <img src="/images/zebra pattern.svg"/>
            </div>
            <div>
                <p className={styles.description}>{props.description}</p>
            </div>
            <div className={styles.patternContainer}>
                <img src="/images/zebra pattern.svg"/>
            </div>
        </div>
    </div>);
}

export default SaleBanner;
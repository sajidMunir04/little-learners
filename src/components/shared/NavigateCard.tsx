import styles from "./NavigateCard.module.css";

interface Props{
    heading: string,
    description: string,
    link: string
}


function NavigateCard(props : Props) {
    return (<div className={styles.container}>
        <div className={styles.contentContainer}>
            <div>
                <h3 className={styles.headingText}>{props.heading}</h3>
            </div>
            <div className={styles.borderContainer}>
                <div className={styles.borderPart}></div>
                <div className={styles.borderPart}></div>
                <div className={styles.borderPart}></div>
                <div className={styles.borderPart}></div>
                <div className={styles.borderPart}></div>
            </div>
            <div>
                <p className={styles.descriptionText}>{props.description}</p>
            </div>
        </div>
        <div className={styles.linkContainer}>
            <div className={styles.link}>
                <a className={styles.linkText} href={props.link}>Learn More</a>
                <img className={styles.arrowImage} src="/arrow.svg"/>
            </div>
        </div>
    </div>);
}

export default NavigateCard;
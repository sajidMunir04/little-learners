import styles from "./AdmissionProcessCard.module.css";

interface Props{
    index: string,
    heading: string,
    description: string
}


function AdmissionProcessCard(props : Props)
{
    return (<div className={styles.container}>
        <p className={styles.indexText}>{props.index}</p>
        <div className={styles.contentContainer}>
            <h4 className={styles.headingText}>{props.heading}</h4>
            <p className={styles.descriptionText}>{props.description}</p>
        </div>
    </div>);
}

export default AdmissionProcessCard;
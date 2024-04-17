import styles from "./InfoCard.module.css";


interface Props{
    heading: string,
    description: string,
    imageLink: string
}


function InfoCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
                <img src={props.imageLink}/>
            </div>
        </div>
        <div className={styles.textSection}>
            <p>{props.heading}</p>
            <p>{props.description}</p>
        </div>
    </div>);
}

export default InfoCard;
import styles from "./EventCard.module.css";

interface Props {
    imageLink: string,
    heading: string,
    description: string
}


function EventCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.imageContainer}>
            <div className={styles.imageBackground}>

            </div>
            <div className={styles.imageParent}>
                <img className={styles.image} src={props.imageLink} alt="info image"/>
            </div>
        </div>
        <div className={styles.textContainer}>
            <p className={styles.headingText}>{props.heading}</p>
            <p className={styles.descriptionText}>{props.description}</p>
        </div>
    </div>);
}

export default EventCard;
import styles from "./MissionCard.module.css";

interface Props{
    heading: string,
    imageLink: string,
    description: string
}

function MissionCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.header}>
            <div>
                <h3 className={styles.headingText}>{props.heading}</h3>
            </div>
            <div>
                <img src={props.imageLink}/>
            </div>
        </div>
        <div>
            <p className={styles.descriptionText}>{props.description}</p>
        </div>
    </div>);
}

export default MissionCard;
import styles from "./TeamMemberCard.module.css";

interface Props{
    imageLink: string,
    name: string,
    qualification: string,
    introduction: string
}

function TeamMemberCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.profileSection}>
            <div className={styles.memberDetailSection}>
                <div className={styles.memberPhotoContainer}>
                    <img className={styles.memberPhoto} src={props.imageLink} alt="team member picture"/>
                </div>
                <div>
                    <p className={styles.authorName}>{props.name}</p>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <div className={styles.button}>
                    <img className={styles.btnImage} src="/Icon(5).svg"/>
                </div>
            </div>
        </div>
        <div className={styles.qualificationSection}> 
            <p className={styles.qualificationHeading}>Qualification:{props.qualification}</p>
            <p className={styles.qualificationDescription}>{props.introduction}</p>
        </div>
    </div>);
}

export default TeamMemberCard;
import styles from "./CourseCard.module.css";

interface Props{
    imageLink: string,
    courseName: string,
    courseDescription: string
}

function CourseCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.imageContainer}>
            <div className={styles.imageBackground}>

            </div>
            <div className={styles.imageParent}>
                <img className={styles.image} src={props.imageLink} alt="course info image"/>
            </div>
        </div>
        <div className={styles.textContainer}>
            <p className={styles.headingText}>{props.courseName}</p>
            <p className={styles.descriptionText}>{props.courseDescription}</p>
        </div>
    </div>);
}

export default CourseCard;
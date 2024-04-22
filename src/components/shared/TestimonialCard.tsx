import styles from "./TestimonialCard.module.css";


interface Props {
    authorImageLink: string,
    authorName: string,
    rating: number,
    review: string
}


function TestimonialCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.infoContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src={props.authorImageLink}/>
            </div>
            <p className={styles.authorNameText}>{props.authorName}</p>
        </div>
        <div className={styles.starsContainer}>
            <img src="/star.svg" alt="star"/>
            <img src="/star.svg" alt="star"/>
            <img src="/star.svg" alt="star"/>
            <img src="/star.svg" alt="star"/>
            <img src="/star.svg" alt="star"/>
        </div>
        <div>
            <p className={styles.reviewText}>{props.review}</p>
        </div>
    </div>);
}

export default TestimonialCard;
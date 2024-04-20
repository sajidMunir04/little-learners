import ArrowButton from "../shared/ArrowButton";
import styles from "./GalleryCard.module.css";

interface Props {
    imagesLink: string[],
    heading: string,
    description: string
}

function GalleryCard(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.imagesContainer}>
            {props.imagesLink.map((item) => (<div className={styles.imageParent}>
                <img className={styles.image} src={item} alt="gallery image"/>
            </div>))}
        </div>
        <div className={styles.contentSection}>
            <div className={styles.header}>
            <h4 className={styles.headingText}>{props.heading}</h4>
            <div className={styles.buttonsContainer}>
                <ArrowButton onClick={function (): void {
                        
                    } } />
                <ArrowButton rotated={true} onClick={function (): void {
                    
                } } />
            </div>
            </div>
            <p className={styles.descriptionText}>{props.description}</p>
        </div>
    </div>);
}

export default GalleryCard;
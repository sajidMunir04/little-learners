import SectionHeader from "../shared/SectionHeader";
import GalleryCard from "./GalleryCard";
import styles from "./GallerySection.module.css";

function GallerySection()
{
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Our Gallery" heading="Our Rooms Gallery" description="Step into our Gallery and immerse yourself in a 
            visual journey of cherished moments and unforgettable experiences at our kindergarten school."/>
        </div>
        <div className={styles.contentSection}>
            <div className={styles.buttonsContainer}>
                <button className={styles.button}>All</button>
                <button className={styles.button}>Classrooms</button>
                <button className={styles.button}>Library</button>
                <button className={styles.button}>Science Lab</button>
                <button className={styles.button}>Computer Lab</button>
                <button className={styles.button}>Garden and Nature Area</button>
            </div>
            <div className={styles.contentContainer}>
                <GalleryCard imagesLink={['/galleryImage.png','/galleryImage.png','/galleryImage.png','/galleryImage.png']} 
                heading="Classrooms" description="Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. 
                Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."/>
                <GalleryCard imagesLink={['/galleryImage.png','/galleryImage.png','/galleryImage.png','/galleryImage.png']} 
                heading="Classrooms" description="Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. 
                Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."/>
                <GalleryCard imagesLink={['/galleryImage.png','/galleryImage.png','/galleryImage.png','/galleryImage.png']} 
                heading="Classrooms" description="Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. 
                Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."/>
                <GalleryCard imagesLink={['/galleryImage.png','/galleryImage.png','/galleryImage.png','/galleryImage.png']} 
                heading="Classrooms" description="Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. 
                Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."/>
                <GalleryCard imagesLink={['/galleryImage.png','/galleryImage.png','/galleryImage.png','/galleryImage.png']} 
                heading="Classrooms" description="Our well-equipped classrooms are designed to provide a nurturing and stimulating learning environment. 
                Each classroom is thoughtfully arranged to inspire creativity, curiosity, and engagement."/>
            </div>
        </div>
    </div>);
}

export default GallerySection;
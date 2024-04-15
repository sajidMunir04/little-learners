import SectionHeader from "../shared/SectionHeader";
import GalleryCard from "./GalleryCard";


function GallerySection()
{
    return (<div>
        <div>
            <SectionHeader subText="Our Gallery" heading="Our Rooms Gallery" description="Step into our Gallery and immerse yourself in a 
            visual journey of cherished moments and unforgettable experiences at our kindergarten school."/>
        </div>
        <div>
            <div>
                <div>
                    <p>All</p>
                </div>
                <div>
                    <p>Classrooms</p>
                </div>
                <div>
                    <p>Library</p>
                </div>
                <div>
                    <p>Science Lab</p>
                </div>
                <div>
                    <p>Computer Lab</p>
                </div>
                <div>
                    <p>Garden and Nature Area</p>
                </div>
            </div>
            <div>
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
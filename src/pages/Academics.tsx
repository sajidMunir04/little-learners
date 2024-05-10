import FeaturesSection from "../components/academics/FeaturesSection";
import GallerySection from "../components/academics/GallerySection";
import LearnSection from "../components/academics/LearnSection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import PageBanner from "../components/shared/PageBanner";
import SaleBanner from "../components/shared/SaleBanner";


function Academics() {
    return (<>
     <SaleBanner description='Admission is Open, Grab your seat now'/>
    <Header/>
    <PageBanner subText={"Academics"} heading={"Nurturing Young Minds for Success"} description={"Welcome to our Academics page, where we take pride in providing a comprehensive and stimulating educational experience for your child. Our kindergarten school's academic program is thoughtfully designed to foster a love for learning while building a strong foundation of essential skills and knowledge. From language arts and mathematics to science and social studies, our curriculum is carefully crafted to spark curiosity and encourage active exploration."} />

    <FeaturesSection/>
    <LearnSection/>
    <GallerySection/>
    <Footer/>
    </>);
}

export default Academics;
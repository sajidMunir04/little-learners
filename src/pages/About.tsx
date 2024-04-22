import HistorySection from "../components/aboutus/HistorySection";
import MissionSection from "../components/aboutus/MissionSection";
import RecognitionSection from "../components/aboutus/RecognitionSection";
import TeamSection from "../components/aboutus/TeamSection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import PageBanner from "../components/shared/PageBanner";

function About() {
    return (<>
    <Header/>
    <PageBanner subText={"Overview"} heading={"Welcome to Little Learners Academy"} 
    description={"A leading kinder garden school dedicated to providing a nurturing and stimulating environment for young learners. With a commitment to excellence in early education, we believe in shaping curious minds and building a strong foundation for a lifelong love of learning. Our holistic approach fosters intellectual, social, emotional, and physical development, ensuring that each child reaches their full potential."} />
        <MissionSection/>
        <RecognitionSection/>
        <HistorySection/>
        <TeamSection/>
        <Footer/>
    </>);
}

export default About;
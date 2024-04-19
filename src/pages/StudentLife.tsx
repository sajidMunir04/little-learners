import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import PageBanner from "../components/shared/PageBanner";
import ActivitiesSection from "../components/studentlife/ActivitiesSection";
import EventSection from "../components/studentlife/EventSection";
import StudentSupportSection from "../components/studentlife/StudentSupportSection";


function StudentLife() {
    return (<>
    <Header/>
    <PageBanner subText={"Enriching Student Life"} heading={"Embracing Learning with Discovery and Joy"} description={"Welcome to our Student Life page, where the magic of childhood comes alive through the enriching experiences and adventures that our students embark on each day. At our kindergarten school, we believe that learning goes beyond textbooks, and we strive to create a holistic and engaging environment that nurtures every aspect of a child's development."}/>
    <ActivitiesSection/>
    <EventSection/>
    <StudentSupportSection/>
    <Footer/>
    </>);
}

export default StudentLife;
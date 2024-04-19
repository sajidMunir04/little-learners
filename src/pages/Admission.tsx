import AdmissionSection from "../components/admission/AdmissionSection";
import FeeSection from "../components/admission/FeeSection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import PageBanner from "../components/shared/PageBanner";

function Admission() {
    return (<>
    <Header/>
    <PageBanner subText={"Admission"} heading={"Join Our Family of Young Learners"} description={"At Little Learners Academy, we welcome you to embark on an exciting educational journey for your child. Our admission process is designed to be transparent, straightforward, and inclusive. Here's a step-by-step guide to joining our school"}/>
    <AdmissionSection/>
    <FeeSection/>
    <Footer/>
    </>);
}

export default Admission;
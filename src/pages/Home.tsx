import BenefitSection from "../components/home/BenefitSection";
import FAQSection from "../components/home/FAQSection";
import MainBanner from "../components/home/MainBanner";
import NavigateSection from "../components/home/NavigateSection";
import TestimonialSection from "../components/home/TestimonialSection";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import SaleBanner from "../components/shared/SaleBanner";


function Home() {
    return (<>
        <SaleBanner description='Admission is Open, Grab your seat now'/>
        <Header/>
        <MainBanner/>
        <BenefitSection/>
        <TestimonialSection/>
        <FAQSection/>
        <NavigateSection/>
        <Footer/>
    </>);
}

export default Home;
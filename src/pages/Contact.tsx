import ContactForm from "../components/contact/ContactForm";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";
import PageBanner from "../components/shared/PageBanner";


function Contact() {
    return (<>
        <Header/>
        <PageBanner subText={"Contact Us"} heading={"Feel Free To Connect With Us"} description={"We value open communication and are eager to assist you with any inquiries. Feel free to reach out to us through any of the following contact methods"}/>
        <ContactForm/>
        <Footer/>
    </>);
}

export default Contact;
import SectionHeader from "../shared/SectionHeader";
import AdmissionProcessCard from "./AdmissionProcessCard";
import styles from "./AdmissionSection.module.css";

function AdmissionSection()
{
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Process" heading="Admission Process" description="Embark on a remarkable educational journey with us! Our Admission and Enrollment process is the gateway to 
            providing your child with an exceptional learning experience at our kindergarten school"/>
        </div>
        <div className={styles.contentContainer}>
            <AdmissionProcessCard index="01" heading="Inquiry" description="Submit an inquiry form through our website or contact our 
            admissions office to express your interest in Little Learners Academy."/>
             <AdmissionProcessCard index="01" heading="Inquiry" description="Submit an inquiry form through our website or contact our 
            admissions office to express your interest in Little Learners Academy."/>
             <AdmissionProcessCard index="01" heading="Inquiry" description="Submit an inquiry form through our website or contact our 
            admissions office to express your interest in Little Learners Academy."/>
             <AdmissionProcessCard index="01" heading="Inquiry" description="Submit an inquiry form through our website or contact our 
            admissions office to express your interest in Little Learners Academy."/>
             <AdmissionProcessCard index="01" heading="Inquiry" description="Submit an inquiry form through our website or contact our 
            admissions office to express your interest in Little Learners Academy."/>
             <AdmissionProcessCard index="01" heading="Inquiry" description="Submit an inquiry form through our website or contact our 
            admissions office to express your interest in Little Learners Academy."/>
        </div>
    </div>);
}

export default AdmissionSection;
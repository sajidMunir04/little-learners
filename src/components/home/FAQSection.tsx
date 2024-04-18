import QuestionElement from "../shared/QuestionElement";
import SectionHeader from "../shared/SectionHeader";
import styles from "./FAQSection.module.css";

function FAQSection(){
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Solutions For The Doubts" heading="Frequently Asked Questions" description="Find all the essential information you need in our FAQ section, designed to address the most frequently asked questions and 
            help you make informed decisions for your child's education."/>
        </div>
        <div className={styles.contentContainer}>
            <QuestionElement question="What are the school hours at Little Learners Academy?"
            answer="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer 
            extended care options for parents who need early drop-off or late pick-up."/>
            
            <QuestionElement question="What are the school hours at Little Learners Academy?"
            answer="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer 
            extended care options for parents who need early drop-off or late pick-up."/>
            
            <QuestionElement question="What are the school hours at Little Learners Academy?"
            answer="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer 
            extended care options for parents who need early drop-off or late pick-up."/>
            
            <QuestionElement question="What are the school hours at Little Learners Academy?"
            answer="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer 
            extended care options for parents who need early drop-off or late pick-up."/>
            
            <QuestionElement question="What are the school hours at Little Learners Academy?"
            answer="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer 
            extended care options for parents who need early drop-off or late pick-up."/>
            
            <QuestionElement question="What are the school hours at Little Learners Academy?"
            answer="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer 
            extended care options for parents who need early drop-off or late pick-up."/>
            
            <QuestionElement question="What are the school hours at Little Learners Academy?"
            answer="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer 
            extended care options for parents who need early drop-off or late pick-up."/>
            
            <QuestionElement question="What are the school hours at Little Learners Academy?"
            answer="Our school hours are from 8:00 AM to 3:00 PM, Monday to Friday. We also offer 
            extended care options for parents who need early drop-off or late pick-up."/>
        </div>
    </div>);
}

export default FAQSection;
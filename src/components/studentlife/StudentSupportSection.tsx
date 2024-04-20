import InfoCard from "../shared/InfoCard";
import SectionHeader from "../shared/SectionHeader";
import styles from "./StudentSupportSection.module.css";

function StudentSupportSection()
{
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Our Achievements" heading="Student Support" description="At Little Learners Academy, we are committed 
            to providing a supportive and nurturing environment that meets the unique needs of each student. 
            Our student support services include"/>
        </div>
        <div className={styles.content}>
            <InfoCard imageLink="/Icon(1).svg" heading="Counseling" description="Professional counselors offer guidance and 
            support to students, addressing their emotional and social well-being."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Counseling" description="Professional counselors offer guidance and 
            support to students, addressing their emotional and social well-being."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Counseling" description="Professional counselors offer guidance and 
            support to students, addressing their emotional and social well-being."/>
        </div>
    </div>);
}

export default StudentSupportSection;
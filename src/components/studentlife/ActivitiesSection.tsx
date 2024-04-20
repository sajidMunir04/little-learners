import InfoCard from "../shared/InfoCard";
import SectionHeader from "../shared/SectionHeader";
import styles from "./ActivitiesSection.module.css";

function ActivitiesSection() {
    return(<div className={styles.container}>
        <div>
            <SectionHeader subText="Our Features" heading="Extracurricular Activities" description="At Little Learners Academy, we believe in nurturing well-rounded individuals. Our extracurricular activities offer a diverse range of experiences that complement our academic curriculum and encourage students to explore 
            their interests and passions. We offer a wide array of extracurricular activities, including"/>
        </div>
        <div className={styles.contentContainer}>
            <InfoCard imageLink="/Icon(1).svg" heading="Sports and Athletics" description="Students can participate in various sports, from soccer and basketball 
            to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Sports and Athletics" description="Students can participate in various sports, from soccer and basketball 
            to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Sports and Athletics" description="Students can participate in various sports, from soccer and basketball 
            to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Sports and Athletics" description="Students can participate in various sports, from soccer and basketball 
            to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Sports and Athletics" description="Students can participate in various sports, from soccer and basketball 
            to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Sports and Athletics" description="Students can participate in various sports, from soccer and basketball 
            to gymnastics and yoga. Sports help promote teamwork, physical fitness, and a sense of discipline."/>
        </div>
    </div>);
}

export default ActivitiesSection;
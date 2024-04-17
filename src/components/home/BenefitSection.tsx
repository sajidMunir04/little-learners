import InfoCard from "../shared/InfoCard";
import SectionHeader from "../shared/SectionHeader";
import styles from "./BenefitSection.module.css";

function BenefitSection(){
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Children Deserve Bright Future" heading="Our Benefits" description="With a dedicated team of experienced educators, state-of-the-art facilities, and a comprehensive curriculum, 
            we aim to lay a strong foundation for your child's future."/>
        </div>
        <div className={styles.contentContainer}>
            <InfoCard heading="Holistic Learning Approach" description="Our curriculum focuses on nurturing cognitive, social, 
            emotional, and physical development, ensuring a well-rounded education." imageLink="/Icon(1).svg"/>
            <InfoCard heading="Holistic Learning Approach" description="Our curriculum focuses on nurturing cognitive, social, 
            emotional, and physical development, ensuring a well-rounded education." imageLink="/Icon(1).svg"/>
            <InfoCard heading="Holistic Learning Approach" description="Our curriculum focuses on nurturing cognitive, social, 
            emotional, and physical development, ensuring a well-rounded education." imageLink="/Icon(1).svg"/>
            <InfoCard heading="Holistic Learning Approach" description="Our curriculum focuses on nurturing cognitive, social, 
            emotional, and physical development, ensuring a well-rounded education." imageLink="/Icon(1).svg"/>
            <InfoCard heading="Holistic Learning Approach" description="Our curriculum focuses on nurturing cognitive, social, 
            emotional, and physical development, ensuring a well-rounded education." imageLink="/Icon(1).svg"/>
            <InfoCard heading="Holistic Learning Approach" description="Our curriculum focuses on nurturing cognitive, social, 
            emotional, and physical development, ensuring a well-rounded education." imageLink="/Icon(1).svg"/>
        </div>
    </div>);
}

export default BenefitSection;
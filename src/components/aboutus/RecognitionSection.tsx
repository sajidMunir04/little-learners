import ArrowButton from "../shared/ArrowButton";
import InfoCard from "../shared/InfoCard";
import SectionHeader from "../shared/SectionHeader";
import styles from "./RecognitionSection.module.css";

function RecognitionSection()
{
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Our Achievements" heading="Our Awards and Recognitions" description="Little Learners Academy takes pride 
            in our commitment to delivering high-quality education and outstanding student experiences. We are honored to 
            have received various awards and recognitions for our dedication to early childhood education. 
            These accolades reflect our team's relentless efforts in creating an exceptional learning environment for our students."/>
        </div>
        <div>
            <div className={styles.contentContainer}>
                <InfoCard heading="Outstanding Early Childhood Education Awar" imageLink="/Icon(2).svg" description="Presented by the National Association for the Education 
                of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional 
                early childhood education and fostering a nurturing learning environment."/>
                <InfoCard heading="Outstanding Early Childhood Education Awar" imageLink="/Icon(2).svg" description="Presented by the National Association for the Education 
                of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional 
                early childhood education and fostering a nurturing learning environment."/>
                <InfoCard heading="Outstanding Early Childhood Education Awar" imageLink="/Icon(2).svg" description="Presented by the National Association for the Education 
                of Young Children (NAEYC) in recognition of Little Learners Academy's commitment to delivering exceptional 
                early childhood education and fostering a nurturing learning environment."/>
            </div>
            <div className={styles.infoSection}>
                <div>
                    <p>8 More Awards</p>
                </div>
                <div className={styles.buttonsContainer}>
                    <div>
                        <ArrowButton onClick={function (): void {
                            
                        } }/>
                    </div>
                    <div>
                        <ArrowButton rotated={true} onClick={function (): void {
                            
                        } }/>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default RecognitionSection;
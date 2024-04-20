import InfoCard from "../shared/InfoCard";
import SectionHeader from "../shared/SectionHeader";
import styles from "./FeaturesSection.module.css";

function FeaturesSection()
{
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Our Features" heading="Our Special Features" description="Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning that lasts a lifetime. 
            Join us as we embark on an exciting educational journey together!"/>
        </div>
        <div className={styles.contentContainer}>
            <InfoCard imageLink="/Icon(1).svg" heading="Thematic Learning" description="Our curriculum is centered around engaging themes that capture children's 
            imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Thematic Learning" description="Our curriculum is centered around engaging themes that capture children's 
            imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Thematic Learning" description="Our curriculum is centered around engaging themes that capture children's 
            imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Thematic Learning" description="Our curriculum is centered around engaging themes that capture children's 
            imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Thematic Learning" description="Our curriculum is centered around engaging themes that capture children's 
            imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."/>
            <InfoCard imageLink="/Icon(1).svg" heading="Thematic Learning" description="Our curriculum is centered around engaging themes that capture children's 
            imaginations. Each theme integrates multiple subjects, making learning enjoyable and relevant."/>
        </div>
    </div>);
}

export default FeaturesSection;
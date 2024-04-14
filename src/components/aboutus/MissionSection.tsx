import SectionHeader from "../shared/SectionHeader";
import MissionCard from "./MissionCard";


function MissionSection()
{
    return (<div>
        <div>
            <SectionHeader subText="Mission & Visions" heading="Our Mission & Visions" description="We are here to provide a nurturing and 
            inclusive environment where young minds can thrive, fostering a love for learning and personal growth."/>
        </div>
        <div>
            <MissionCard heading="Mission" imageLink="/Icon(4).svg" description="At Little Learners Academy, our mission is to inspire a 
            passion for learning and empower young minds to become confident, compassionate, and creative 
            individuals. We strive to create a safe and inclusive space where children thrive academically, 
            socially, and emotionally, setting the stage for a successful educational journey." />
            <MissionCard heading="Mission" imageLink="/Icon(4).svg" description="At Little Learners Academy, our mission is to inspire a 
            passion for learning and empower young minds to become confident, compassionate, and creative 
            individuals. We strive to create a safe and inclusive space where children thrive academically, 
            socially, and emotionally, setting the stage for a successful educational journey." />
            <MissionCard heading="Mission" imageLink="/Icon(4).svg" description="At Little Learners Academy, our mission is to inspire a 
            passion for learning and empower young minds to become confident, compassionate, and creative 
            individuals. We strive to create a safe and inclusive space where children thrive academically, 
            socially, and emotionally, setting the stage for a successful educational journey." />
            <MissionCard heading="Mission" imageLink="/Icon(4).svg" description="At Little Learners Academy, our mission is to inspire a 
            passion for learning and empower young minds to become confident, compassionate, and creative 
            individuals. We strive to create a safe and inclusive space where children thrive academically, 
            socially, and emotionally, setting the stage for a successful educational journey." />
        </div>
    </div>);
}

export default MissionSection;
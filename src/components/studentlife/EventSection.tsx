import SectionHeader from "../shared/SectionHeader";
import EventCard from "./EventCard";
import styles from "./EventSection.module.css";

function EventSection(){
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Our Features" heading="Events & Celebrations" description="At Little Learners Academy, we celebrate every milestone and 
            create cherished memories for our students. Throughout the year, we host a variety 
            of events and celebrations that bring the entire school community together. Some of our memorable events include"/>
        </div>
        <div className={styles.content}>
            <EventCard imageLink="/eventImage.png" heading="Annual Sports Day" 
            description="A day filled with friendly competition, team spirit, and sportsmanship."/>
            <EventCard imageLink="/eventImage.png" heading="Annual Sports Day" 
            description="A day filled with friendly competition, team spirit, and sportsmanship."/>
            <EventCard imageLink="/eventImage.png" heading="Annual Sports Day" 
            description="A day filled with friendly competition, team spirit, and sportsmanship."/>
            <EventCard imageLink="/eventImage.png" heading="Annual Sports Day" 
            description="A day filled with friendly competition, team spirit, and sportsmanship."/>
            <EventCard imageLink="/eventImage.png" heading="Annual Sports Day" 
            description="A day filled with friendly competition, team spirit, and sportsmanship."/>
            <EventCard imageLink="/eventImage.png" heading="Annual Sports Day" 
            description="A day filled with friendly competition, team spirit, and sportsmanship."/>
        </div>
    </div>);
}

export default EventSection;
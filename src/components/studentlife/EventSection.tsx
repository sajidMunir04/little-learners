import SectionHeader from "../shared/SectionHeader";
import EventCard from "./EventCard";


function EventSection(){
    return (<div>
        <div>
            <SectionHeader subText="Our Features" heading="Events & Celebrations" description="At Little Learners Academy, we celebrate every milestone and 
            create cherished memories for our students. Throughout the year, we host a variety 
            of events and celebrations that bring the entire school community together. Some of our memorable events include"/>
        </div>
        <div>
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
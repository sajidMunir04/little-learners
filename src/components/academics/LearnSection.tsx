import SectionHeader from "../shared/SectionHeader";
import CourseCard from "./CourseCard";

function LearnSection()
{
    return (<div>
        <div>
            <SectionHeader subText="Our Features" heading="What Students Learn" description="At Little Learners Academy, we strive to cultivate a love 
            for learning and equip children with essential skills for their future success. Our academic programs 
            cover a wide range of subjects, allowing students to develop a strong foundation and discover their interests. 
            Some key areas of learning include"/>
        </div>
        <div>
            <CourseCard imageLink="/courseImage.png" courseName="Language Arts" courseDescription="Reading, writing, storytelling, 
            and communication skills."/>
            <CourseCard imageLink="/courseImage.png" courseName="Language Arts" courseDescription="Reading, writing, storytelling, 
            and communication skills."/>
            <CourseCard imageLink="/courseImage.png" courseName="Language Arts" courseDescription="Reading, writing, storytelling, 
            and communication skills."/>
            <CourseCard imageLink="/courseImage.png" courseName="Language Arts" courseDescription="Reading, writing, storytelling, 
            and communication skills."/>
            <CourseCard imageLink="/courseImage.png" courseName="Language Arts" courseDescription="Reading, writing, storytelling, 
            and communication skills."/>
            <CourseCard imageLink="/courseImage.png" courseName="Language Arts" courseDescription="Reading, writing, storytelling, 
            and communication skills."/>
        </div>
    </div>);
}

export default LearnSection;
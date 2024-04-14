import SectionHeader from "../shared/SectionHeader";
import TestimonialCard from "../shared/TestimonialCard";

function TestimonialSection(){
    return (<div>
        <div>
            <SectionHeader subText="Their Happy Words 🤗" heading="Our Testimonials" description="Our testimonials are heartfelt reflections of 
            the nurturing environment we provide, where children flourish both academically and emotionally."/>
        </div>
        <div>
            <div>

            </div>
            <div>
                <TestimonialCard authorImageLink="/Icon(2).svg" authorName="Jennifer B" rating={5} review="Little Learners Academy has been a 
                second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"/>
                
                <TestimonialCard authorImageLink="/Icon(2).svg" authorName="Jennifer B" rating={5} review="Little Learners Academy has been a 
                second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"/>
                
                <TestimonialCard authorImageLink="/Icon(2).svg" authorName="Jennifer B" rating={5} review="Little Learners Academy has been a 
                second home for my child. The caring staff and engaging programs have made her excited to go to school every day!"/>
            </div>
            <div>

            </div>
        </div>
    </div>);
}

export default TestimonialSection;
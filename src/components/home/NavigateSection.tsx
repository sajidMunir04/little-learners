import NavigateCard from "../shared/NavigateCard";
import SectionHeader from "../shared/SectionHeader";
import styles from "./NavigateSection.module.css";

function NavigateSection(){
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Explore More" heading="Navigate through our Pages" description="Your gateway to discovering a wealth of valuable information about our kindergarten school, Feel free to 
            explore and learn more about the enriching experiences that await your child at our kindergarten school"/>
        </div>
        <div className={styles.contentContainer}>
            <NavigateCard heading="About Us" link="#" description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. 
            Learn about our passionate educators and our engaging approach to early education."/>
            <NavigateCard heading="About Us" link="#" description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. 
            Learn about our passionate educators and our engaging approach to early education."/>
            <NavigateCard heading="About Us" link="#" description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. 
            Learn about our passionate educators and our engaging approach to early education."/>
            <NavigateCard heading="About Us" link="#" description="Discover our Mission, Values, and our unwavering commitment to providing the best learning experience for your child. 
            Learn about our passionate educators and our engaging approach to early education."/>
        </div>
    </div>);
}

export default NavigateSection;
import HeadingSubText from "./HeadingSubText";
import SectionDescription from "./SectionDescription";
import SectionHeading from "./SectionHeading";
import styles from "./SectionHeader.module.css";

interface Props{
    subText: string,
    heading: string,
    description: string
}

function SectionHeader(props : Props) {
    return (<div className={styles.container}>
        <HeadingSubText text={props.subText}/>
        <SectionHeading heading={props.heading}/>
        <SectionDescription description={props.description}/>
    </div>);
}

export default SectionHeader;
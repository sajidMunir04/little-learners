import styles from "./SectionHeading.module.css";

interface Props {
    heading : string
}

function SectionHeading(props : Props)
{
    return (<h2 className={styles.text}>{props.heading}</h2>);
}

export default SectionHeading;
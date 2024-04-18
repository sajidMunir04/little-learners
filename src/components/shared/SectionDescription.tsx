import styles from "./SectionDescription.module.css";

interface Props{
    description: string
}

function SectionDescription(props : Props)
{
    return (<p className={styles.text}>{props.description}</p>);
}

export default SectionDescription;
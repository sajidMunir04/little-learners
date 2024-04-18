import styles from "./HeadingSubText.module.css";

interface Props{
    text: string
}


function HeadingSubText(props : Props)
{
    return (<p className={styles.text}>{props.text}</p>);
}

export default HeadingSubText;
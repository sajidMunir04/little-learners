import styles from "./ArrowButton.module.css";


interface Props{
    onClick: () => void;
}

function ArrowButton(props : Props) {
    return (<div onClick={props.onClick} className={styles.container}>
        <img className={styles.image} src="/arrow.svg"/>
    </div>);
}

export default ArrowButton;
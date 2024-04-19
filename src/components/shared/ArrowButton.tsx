import styles from "./ArrowButton.module.css";


interface Props{
    onClick: () => void;
    rotated?: boolean
}

function ArrowButton(props : Props) {
    return (<div onClick={props.onClick} className={`${styles.container} ${props.rotated && styles.rotated}`}>
        <img className={styles.image} src="/arrow.svg"/>
    </div>);
}

export default ArrowButton;
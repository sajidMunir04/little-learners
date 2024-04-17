import styles from "./SaleBanner.module.css";


interface Props{
    description: string
}


function SaleBanner(props : Props)
{
    return (<div className={styles.container}>
        <div className={styles.backgroundContainer}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="/Abstract Design(3).svg"/>
            </div>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="/Abstract Design(3).svg"/>
            </div>
        </div>
        <div className={styles.contentContainer}>
            <div>

            </div>
            <div>
                <p>{props.description}</p>
            </div>
            <div>

            </div>
        </div>
    </div>);
}

export default SaleBanner;
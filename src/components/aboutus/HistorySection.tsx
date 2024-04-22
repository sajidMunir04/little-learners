import SectionHeader from "../shared/SectionHeader";
import styles from "./HistorySection.module.css";

function HistorySection()
{
    return (<div className={styles.container}>
        <div>
            <SectionHeader subText="Our Progressive Journey" heading="Our History" description="Founded with a passion for early education in 2005, 
            our kindergarten school boasts a rich history of empowering young learners to reach their potential 
            through innovative teaching methods and a supportive learning environment"/>
        </div>
        <div className={styles.contentContainer}>
            <div className={styles.infoPointContainer}>
                <div className={styles.infoPoint}>
                    <div className={styles.infoPointFirstSection}>
                        <div className={styles.infoPointImageContainer}>
                            <img className={styles.infoPointImage} src="/images/about/blocks.svg"/>
                        </div>
                        <p className={styles.dateText}>2023</p>
                    </div>
                    <div className={styles.infoPointContentContainer}>
                        <h4 className={styles.infoHeading}>Resilience and Future Horizons</h4>
                        <p className={styles.infoDescription}>Adapting to new challenges, we remained committed to our mission of providing an exceptional 
                            early education. Looking ahead with optimism, we envision a future filled with boundless 
                            possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
                    </div>
                </div>
                <div className={styles.infoPoint}>
                    <div className={styles.infoPointFirstSection}>
                        <div className={styles.infoPointImageContainer}>
                            <img className={styles.infoPointImage} src="/images/about/blocks.svg"/>
                        </div>
                        <p className={styles.dateText}>2023</p>
                    </div>
                    <div className={styles.infoPointContentContainer}>
                        <h4 className={styles.infoHeading}>Resilience and Future Horizons</h4>
                        <p className={styles.infoDescription}>Adapting to new challenges, we remained committed to our mission of providing an exceptional 
                            early education. Looking ahead with optimism, we envision a future filled with boundless 
                            possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
                    </div>
                </div>
                <div className={styles.infoPoint}>
                    <div className={styles.infoPointFirstSection}>
                        <div className={styles.infoPointImageContainer}>
                            <img className={styles.infoPointImage} src="/images/about/blocks.svg"/>
                        </div>
                        <p className={styles.dateText}>2023</p>
                    </div>
                    <div className={styles.infoPointContentContainer}>
                        <h4 className={styles.infoHeading}>Resilience and Future Horizons</h4>
                        <p className={styles.infoDescription}>Adapting to new challenges, we remained committed to our mission of providing an exceptional 
                            early education. Looking ahead with optimism, we envision a future filled with boundless 
                            possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
                    </div>
                </div>
                <div className={styles.infoPoint}>
                    <div className={styles.infoPointFirstSection}>
                        <div className={styles.infoPointImageContainer}>
                            <img className={styles.infoPointImage} src="/images/about/blocks.svg"/>
                        </div>
                        <p className={styles.dateText}>2023</p>
                    </div>
                    <div className={styles.infoPointContentContainerAltered}>
                        <h4 className={styles.infoHeading}>Resilience and Future Horizons</h4>
                        <p className={styles.infoDescription}>Adapting to new challenges, we remained committed to our mission of providing an exceptional 
                            early education. Looking ahead with optimism, we envision a future filled with boundless 
                            possibilities as we continue shaping the leaders and thinkers of tomorrow.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default HistorySection;
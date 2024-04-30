import styles from "./MainBanner.module.css";


function MainBanner()
{
    return (<div className={styles.container}>
        <div className={styles.imageSection}>
            <div className={styles.imageContainer}>
                <img className={styles.image} src="/Image.png" alt="children posing for an image"/>
                <div className={styles.markerContainer}></div>
                <div className={styles.abstractImageContainer}>
                    <img className={styles.abstractImage} src="/images/home/design.svg"/>
                </div>
            </div>
        </div>
        <div className={styles.textSection}>
            <div>
            <p className={styles.subText}>Welcome to Little Learners Academy</p>
            <h1 className={styles.headingText}>Where Young Minds Blossom and <span className={styles.coloredText}>Dreams Take Flight.</span></h1>
            <p className={styles.descriptionText}>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning 
                that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            </div>
            <div className={styles.statsSection}>
                <div>
                    <p className={styles.statFigure}>+7000</p>
                    <p className={styles.statText}>Students Passed Out</p>
                </div>
                <div className={styles.topAndBottomBorder}>
                    <p className={styles.statFigure}>+37</p>
                    <p className={styles.statText}>Awards & Recognitions</p>
                </div>
                <div>
                    <p className={styles.statFigure}>+15</p>
                    <p className={styles.statText}>Experience Educators</p>
                </div>
            </div>
        </div>
    </div>);
}

export default MainBanner;
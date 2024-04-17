import styles from "./MainBanner.module.css";


function MainBanner()
{
    return (<div className={styles.container}>
        <div>
            <div>
            <img src="/Image.png" />
            </div>
        </div>
        <div className={styles.textSection}>
            <div>
            <p>Welcome to Little Learners Academy</p>
            <h1>Where Young Minds Blossom and Dreams Take Flight.</h1>
            <p>Our kinder garden school provides a nurturing and stimulating environment, fostering a love for learning 
                that lasts a lifetime. Join us as we embark on an exciting educational journey together!</p>
            </div>
            <div className={styles.statsSection}>
                <div>
                    <p>+7000</p>
                    <p>Students Passed Out</p>
                </div>
                <div>
                    <p>+37</p>
                    <p>Awards & Recognitions</p>
                </div>
                <div>
                    <p>+15</p>
                    <p>Experience Educators</p>
                </div>
            </div>
        </div>
    </div>);
}

export default MainBanner;
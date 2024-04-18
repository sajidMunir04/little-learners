import { useState } from "react";
import styles from "./QuestionElement.module.css";


interface Props {
    question: string,
    answer: string
}


function QuestionElement(props : Props)
{

    const [isClicked,setClickState] = useState(false);

    const handleClick =() => {
        setClickState(!isClicked);
    }

    return (<div className={`${styles.container} ${isClicked && styles.clickedState}`}>
        <div className={styles.contenContainer}>
            <div className={styles.questionContainer}>
                <p className={styles.questionText}>{props.question}</p>
            </div>
            { isClicked  && <div className={styles.answerContainer}>
                <p className={styles.answerText}>{props.answer}</p>
            </div>}
        </div>
        <div className={styles.buttonContainer}>
            <div className={styles.button} onClick={handleClick}>
                {!isClicked && <img className={styles.btnImage} src="/plus.svg"/>}
                {isClicked && <img className={styles.btnImage} src="/minus.svg"/>}
            </div>
        </div>
    </div>);
}

export default QuestionElement;
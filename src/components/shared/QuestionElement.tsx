import styles from "./QuestionElement.module.css";


interface Props {
    question: string,
    answer: string
}


function QuestionElement(props : Props)
{
    return (<div className={styles.container}>
        <div>
            <div>
                <p>{props.question}</p>
            </div>
            <div>
                <p>{props.answer}</p>
            </div>
        </div>
        <div>
            <div>
                <p>+</p>
            </div>
        </div>
    </div>);
}

export default QuestionElement;
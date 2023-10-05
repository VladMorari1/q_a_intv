import React, {useState} from 'react';
import styles from './styles.module.css'

function QuestionAnswer({question, answer, number}) {
    const [showResponse, setShowResponse] = useState(false);

    return (
        <div className={styles.questionResponse_container}>
            <div className={styles.question_button_block}>
                <div className={styles.question}>
                    <span className={styles.rowNumber}>[{number}]</span>
                    {question}
                </div>
                <button className={styles.questionResponse_button} onClick={() => setShowResponse(!showResponse)}>
                    {!showResponse ? 'Show response' : 'Hide response'}
                </button>
            </div>

            {showResponse && <div className={styles.questionResponse_response}>{answer}</div>}

        </div>
    );
}

export default QuestionAnswer;
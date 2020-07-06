import React, {useState} from 'react';
import '../assets/style.css';

const QuestionBox = ({ question, options, selected }) => { // selected will be the function which will take the chosen 
                                                           // ans to calculate the score

    const [answer, setAnswer] = useState(options);

    return (
        <div className="questionBox">
            <div className="question">{question}</div>
            {answer.map((text, index) => (
                <button key={index} className="answerBtn"
                    onClick={() => {
                        setAnswer([text])
                        selected(text)
                    }}
                    >{text}</button>
            ))}
        </div>
    );
}
export default QuestionBox;
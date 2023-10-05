import QuestionAnswer from "./components/QuestionAnswer";
import {cursesType, questions} from "./Questions";
import {useState} from "react";
import CursType from "./components/CursType";
import './App.css'


function App() {
    const [cursType, setCursType] = useState(cursesType.NONE)
    return (<div>
        {cursType !== cursesType.NONE &&
            <div className="close_wrapper">
                <div className="close_btn" onClick={() => setCursType(cursesType.NONE)}>Close questions</div>
            </div>}

        {cursType === cursesType.NONE && <CursType setCursType={setCursType}/>}
        {cursType === cursesType.REACT &&
            questions.react.map((q_a, i) => <QuestionAnswer
                question={q_a.question}
                answer={q_a.answer}
                number={i + 1}
            />)}
        {cursType === cursesType.TYPESCRIPT &&
            questions.typescript.map((q_a, i) => <QuestionAnswer
                question={q_a.question}
                answer={q_a.answer}
                number={i + 1}
            />)}
        {cursType === cursesType.JAVASCRIPT &&
            questions.javascript.map((q_a, i) => <QuestionAnswer
                question={q_a.question}
                answer={q_a.answer}
                number={i + 1}
            />)}
    </div>);
}

export default App;

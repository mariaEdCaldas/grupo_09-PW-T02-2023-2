import "./QuizAnswerButton.scss"


interface QuizAnswerButtonProps {
    answerLetter: string[1]
    content: string
    backgroundColor: string;
    color: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: () => void;
}

export default function QuizAnswerButton(props: QuizAnswerButtonProps) {
    return (
        <button
            className="quiz-answer-button"
            onClick={props.onClick && props.onClick}
            type={props.type ? props.type : "button"}
            style={{backgroundColor: props.backgroundColor}}
        >
            <div className="quiz-answer-button-body" style={{color: props.color}}>
                <div className="answer-letter-container" style={{color: props.color}}>
                    {props.answerLetter}
                </div>
                <div className="answer-content-container" style={{color: props.color}}>
                    {props.content}
                </div>
            </div>
        </button>
    );
}

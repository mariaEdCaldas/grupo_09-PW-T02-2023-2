import RoundThinButton from "../buttons/RoundThinButton";
import "./questionEditItem.scss";

interface QuestionEditItemProps{
    title: string;
    onDelete?: () => void;
}

export default function QuestionEditItem({title, onDelete}:QuestionEditItemProps){
    return(
        <div className="quiz-builder-form-question-item">
            <h2 className="quiz-builder-form-question-item-title">{title}</h2>
            <RoundThinButton
                backgroundColor="#B93C3C"
                color="white"
                onClick={onDelete}
            >
                Remover
            </RoundThinButton>
        </div>
    )
}

import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/buttons/DefaultButton";
import TextInput from "../../components/form/inputs/textInput/TextInput";
import IsNotLoggedRedirecter from "../../components/isNotLoggedRedirecter/IsNotLoggedRedirecter";
import { addStoredQuestion } from "../../logic/quizEditStorage";
import { Questao } from "../../models/Quiz";
import "./QuestionBuilder.scss";

export default function QuestionBuilder() {
    const maxAnswerLength = 180;
    const navigateTo = useNavigate();
    const handleSaveQuestion = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const question : Questao = {
            enunciado: document.querySelector<HTMLInputElement>("#question-statement")!.value,
            respostas: [
                {
                    resposta: document.querySelector<HTMLInputElement>("#question-answer-a")!.value,
                    correta: document.querySelector<HTMLInputElement>("#a")!.checked
                },
                {
                    resposta: document.querySelector<HTMLInputElement>("#question-answer-b")!.value,
                    correta: document.querySelector<HTMLInputElement>("#b")!.checked
                },
                {
                    resposta: document.querySelector<HTMLInputElement>("#question-answer-c")!.value,
                    correta: document.querySelector<HTMLInputElement>("#c")!.checked
                },
                {
                    resposta: document.querySelector<HTMLInputElement>("#question-answer-d")!.value,
                    correta: document.querySelector<HTMLInputElement>("#d")!.checked
                }
            ]
        }
        addStoredQuestion(question);
        navigateTo("/create-quiz");
    }
    return (
        <>
        <IsNotLoggedRedirecter/>
        <div className="question-builder-wrapper">
            <div className="question-builder-container">
                <h1 className="question-builder-title">Criar questão</h1>
                <form
                    id="question-builder-form"
                    className="question-builder-form"
                    onSubmit={handleSaveQuestion}
                >
                    <div className="question-builder-name-container">
                        <TextInput required
                            maxLength={90}
                            label="Enunciado questão"
                            placeholder="Insira o enunciado da questão"
                            id="question-statement"
                        />
                    </div>
                    <div className="question-builder-answers-container">
                        <div className="question-builder-answer-container">
                            <div className="question-builder-answer">
                                <TextInput required type="textarea" maxLength={maxAnswerLength} className="question-builder-answer-input" label="A" id="question-answer-a" />
                            </div>
                            <input
                                type="radio"
                                required
                                className="question-builder-answer-indicator"
                                radioGroup="right-answer"
                                name="right-answer"
                                id="a"
                                value={"a"}
                            />
                        </div>
                        <div className="question-builder-answer-container">
                            <div className="question-builder-answer">
                                <TextInput required type="textarea" maxLength={maxAnswerLength} className="question-builder-answer-input" label="B" id="question-answer-b" />
                            </div>
                            <input
                                type="radio"
                                required
                                className="question-builder-answer-indicator"
                                radioGroup="right-answer"
                                name="right-answer"
                                id="b"
                                value={"b"}
                            />
                        </div>
                        <div className="question-builder-answer-container">
                            <div className="question-builder-answer">
                                <TextInput required type="textarea" maxLength={maxAnswerLength} className="question-builder-answer-input" label="C" id="question-answer-c" />
                            </div>
                            <input
                                type="radio"
                                required
                                className="question-builder-answer-indicator"
                                radioGroup="right-answer"
                                name="right-answer"
                                id="c"
                                value={"c"}
                            />
                        </div>
                        <div className="question-builder-answer-container">
                            <div className="question-builder-answer">
                                <TextInput required type="textarea" maxLength={maxAnswerLength} className="question-builder-answer-input" label="D" id="question-answer-d" />
                            </div>
                            <input
                                type="radio"
                                required
                                className="question-builder-answer-indicator"
                                radioGroup="right-answer"
                                name="right-answer"
                                id="d"
                                value={"d"}
                            />
                        </div>
                    </div>
                    <div className="question-builder-submit-btn-container">
                        <DefaultButton type="submit">Salvar</DefaultButton>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

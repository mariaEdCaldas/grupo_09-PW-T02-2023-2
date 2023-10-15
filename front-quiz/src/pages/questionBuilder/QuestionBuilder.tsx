import GreenButton from "../../components/buttons/GreenButton";
import TextInput from "../../components/form/inputs/textInput/TextInput";
import "./QuestionBuilder.scss";

export default function QuestionBuilder() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => e;
    const maxAnswerLength = 180;
    return (
        <div className="question-builder-wrapper">
            <div className="question-builder-container">
                <h1 className="question-builder-title">Criar questão</h1>
                <form
                    id="question-builder-form"
                    className="question-builder-form"
                    onSubmit={handleSubmit}
                >
                    <div className="question-builder-name-container">
                        <TextInput required
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
                        <GreenButton type="submit">Salvar</GreenButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

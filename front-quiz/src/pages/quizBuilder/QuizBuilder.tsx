import { useNavigate } from "react-router-dom";
import GreenButton from "../../components/buttons/GreenButton";
import RoundThinButton from "../../components/buttons/RoundThinButton";
import SelectInput from "../../components/form/inputs/selectInput/SelectInput";
import TextInput from "../../components/form/inputs/textInput/TextInput";
import { DifficultyEnum } from "../../models/Difficulty";
import "./QuizBuilder.scss";

export default function QuizBuilder() {
    const categoriesOptions = ["Geografia"];
    const difficultiesOptions = Object.values(DifficultyEnum);
    const navigateTo = useNavigate();
    const onSubmit = (event: React.FormEvent<HTMLFormElement>) =>
        console.log(event);
    const onAddQuestion = () => navigateTo("/create-quiz/create-question");
    return (
        <div className="quiz-builder-wrapper">
            <div className="quiz-builder-container">
                <h1 className="quiz-builder-title">Criar questionário</h1>
                <form
                    className="quiz-builder-form"
                    id="quiz-builder-form"
                    onSubmit={onSubmit}
                >
                    <div className="quiz-builder-form-inputs">
                        <div className="quiz-builder-input-container">
                            <TextInput
                                id="quiz-name"
                                label="Nome questionário"
                                placeholder="Insira o nome do questionário"
                                required
                            />
                        </div>
                        <div className="half">
                            <div className="quiz-builder-input-container">
                                <SelectInput
                                    id="quiz-category"
                                    label="Categoria"
                                    placeholder="Selecione a categoria"
                                    options={categoriesOptions}
                                    required
                                />
                            </div>
                            <div className="quiz-builder-input-container">
                                <SelectInput
                                    id="quiz-difficulty"
                                    label="Dificuldade"
                                    placeholder="Selecione a dificuldade"
                                    options={difficultiesOptions}
                                    required
                                />
                            </div>
                        </div>
                    </div>
                    <div className="quiz-builder-form-questions-container">
                        <div className="quiz-builder-form-questions-header">
                            <h2 className="quiz-builder-title">Questões</h2>
                            <RoundThinButton
                                backgroundColor="#3F3F3F"
                                color="white"
                                onClick={onAddQuestion}
                            >
                                Adicionar
                            </RoundThinButton>
                        </div>
                        <div className="quiz-builder-form-questions"></div>
                    </div>
                    <div className="quiz-builder-submit-btn-container">
                        <GreenButton type="submit">Criar</GreenButton>
                    </div>
                </form>
            </div>
        </div>
    );
}

import SelectInput from "../../components/form/inputs/selectInput/SelectInput";
import TextInput from "../../components/form/inputs/textInput/TextInput";
import { DifficultyEnum } from "../../models/Difficulty";
import "./QuizBuilder.scss"

export default function QuizBuilder() {

    const categoriesOptions = ["Geografia"]
    const difficultiesOptions = Object.values(DifficultyEnum)
    return (
        <div className="quiz-builder-wrapper">
            <div className="quiz-builder-container">
                <h1 className="quiz-builder-title">Criar questionário</h1>
                <form className="quiz-builder-form">
                    <div className="quiz-builder-form-inputs">
                        <div className="quiz-builder-input-container">
                            <TextInput id="quiz-name" label="Nome questionário"/>
                        </div>
                        <div className="half">
                            <div className="quiz-builder-input-container">
                                <SelectInput id="quiz-category" label="Categoria" placeholder="Selecione a categoria" options={categoriesOptions}/>
                            </div>
                            <div className="quiz-builder-input-container">
                                <SelectInput id="quiz-difficulty" label="Dificuldade" placeholder="Selecione a dificuldade" options={difficultiesOptions}/>
                            </div>
                        </div>
                    </div>
                    <div className="quiz-builder-form-questions-container">
                        <div className="quiz-builder-form-questions-header">

                        </div>
                        <div className="quiz-builder-form-questions">

                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
}

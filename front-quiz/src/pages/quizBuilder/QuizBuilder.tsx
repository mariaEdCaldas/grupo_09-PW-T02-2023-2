import { useNavigate } from "react-router-dom";
import DefaultButton from "../../components/buttons/DefaultButton";
import RoundThinButton from "../../components/buttons/RoundThinButton";
import SelectInput, { InputOption } from "../../components/form/inputs/selectInput/SelectInput";
import TextInput from "../../components/form/inputs/textInput/TextInput";
import { DifficultyEnum } from "../../models/Difficulty";
import "./QuizBuilder.scss";
import IsNotLoggedRedirecter from "../../components/isNotLoggedRedirecter/IsNotLoggedRedirecter";
import { useEffect, useRef, useState } from "react";
import { getStoredQuizEdit } from "../../logic/quizEditStorage";
import QuestionEditItem from "../../components/questionEditItem/QuestionEditItem";
import { Categoria, Questao, Quiz } from "../../models/Quiz";
import { getAllCategoria } from "../../services/categoria";
import { saveQuiz } from "../../services/quiz";

export default function QuizBuilder() {
    const difficultiesOptions = Object.values(DifficultyEnum).map(
        (difficulty) => {
            return {
                value: difficulty,
                label: difficulty,
            } as InputOption;
        }
    );
    const navigateTo = useNavigate();
    const formRef = useRef<HTMLFormElement>(null);
    const [questions, setQuestions] = useState<Questao[]>([]);
    const [categorias, setCategorias] = useState<Categoria[]>([]);

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        saveCurrentQuizState();
        const currentFormState = getCurrentFormState()
        if(currentFormState.questoes.length === 0){
            alert("O questionário deve ter pelo menos uma questão");
            return;
        }
        const resSave = await saveQuiz(currentFormState)
        if(resSave){
            sessionStorage.removeItem("quizEdit");
            navigateTo("/");
        }
    }
    const onAddQuestion = () =>{
        saveCurrentQuizState();
        navigateTo("/create-quiz/create-question");
    }

    const getCategories = async () => {
        const categoriasRes = await getAllCategoria()
        setCategorias(categoriasRes);
    }
    
    useEffect(() => {
        //gets stored state from sessionStorage
        const quizState = getStoredQuizEdit();
        getCategories().then(()=>{
            setTimeout(() => {
            if(quizState && formRef.current) {
                formRef.current.querySelector<HTMLInputElement>("#quiz-name")!.value = quizState.nome;
                formRef.current.querySelector<HTMLInputElement>("#quiz-category")!.value = quizState.categoria.id||"";
                formRef.current.querySelector<HTMLInputElement>("#quiz-difficulty")!.value = quizState.dificuldade;
                
            }
            },200);
        })
        setQuestions(quizState?.questoes || []);
        
    }
    , [formRef]);
    
    const getCurrentFormState = (newQuestoes?:Questao[]) : Quiz => {
        return {
            nome: formRef.current!.querySelector<HTMLInputElement>("#quiz-name")!.value,
            categoria: {
                nome: formRef.current!.querySelector<HTMLInputElement>("#quiz-category")!.name,
                id: formRef.current!.querySelector<HTMLInputElement>("#quiz-category")!.value
            },
            dificuldade: formRef.current!.querySelector<HTMLInputElement>("#quiz-difficulty")!.value as DifficultyEnum,
            questoes: newQuestoes || questions
        }
    }

    const saveCurrentQuizState = (newQuestoes?:Questao[]) => {
        const quizState : Quiz= getCurrentFormState(newQuestoes)
        if(quizState.nome || quizState.categoria.nome || quizState.dificuldade)
            sessionStorage.setItem("quizEdit", JSON.stringify(quizState));
    }

    return (
        <>
            <IsNotLoggedRedirecter/>
            <div className="quiz-builder-wrapper">
                <div className="quiz-builder-container">
                    <h1 className="quiz-builder-title">Criar questionário</h1>
                    <form
                        ref={formRef}
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
                                        options={
                                            (categorias.map(categoria =>{return {
                                                label:categoria.nome,
                                                value:categoria.id
                                            }}) as InputOption[])
                                        }
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
                            <div className="quiz-builder-form-questions">
                                {questions.map((question, index) => {
                                    return <QuestionEditItem title={question.enunciado} key={index}
                                    onDelete = { () => {
                                        const newQuestions = [...questions];
                                        newQuestions.splice(index, 1);
                                        saveCurrentQuizState(newQuestions);
                                        setQuestions(newQuestions);
                                    }}/>
                                })}
                            </div>
                        </div>
                        <div className="quiz-builder-submit-btn-container">
                            <DefaultButton type="submit">Criar</DefaultButton>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

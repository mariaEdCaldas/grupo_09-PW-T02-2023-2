import "./Home.scss";
import SelectInput, { InputOption } from "../../components/form/inputs/selectInput/SelectInput";
import GameCard from "../../components/gameCard/GameCard";
import { DifficultyEnum } from "../../models/Difficulty";
import IsNotLoggedRedirecter from "../../components/isNotLoggedRedirecter/IsNotLoggedRedirecter";
import { Quiz } from "../../models/Quiz";
import { useEffect, useState } from "react";
import { getAllQuiz } from "../../services/quiz";
import { getAllCategoria } from "../../services/categoria";
import {auth} from "../../services/firebaseConfig"

export default function Home() {
    const [categoriesOptions, setCategoriesOptions] = useState<InputOption[]>([]);

    const getCategories = async () => {
        const categoriasRes : InputOption[] = (await getAllCategoria()).map((categoria) => {
            return {
                value: categoria.nome,
                label: categoria.nome,
            };
        })
        setCategoriesOptions(categoriasRes);
    }
    const difficultyOptions = Object.values(DifficultyEnum).map(
        (difficulty) => {
            return {
                value: difficulty,
                label: difficulty,
            };
        }
    )
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    useEffect(() => {
        getCategories();
        getAllQuiz().then((quizzes) => {
            setQuizzes(quizzes);
        }  );
    }, []);
    return (
        <>
            <IsNotLoggedRedirecter/>
            <div className="game-selection-container">
                <div className="game-search-container">
                    <div className="game-search-category-container">
                        <SelectInput label="Categoria" id="quiz-category" placeholder="Selecione a categoria" options={categoriesOptions}></SelectInput>
                    </div>
                    <div className="game-search-difficulty-container">
                        <SelectInput label="Dificuldade" id="quiz-difficulty" placeholder="Selecione a dificuldade" options={difficultyOptions}></SelectInput>
                    </div>
                </div>
                <div className="game-list-container">
                    {quizzes.map((quiz, idx) => (
                        <GameCard
                            key={idx}
                            id={quiz.id||"0"}
                            name={quiz.nome}
                            difficulty={quiz.dificuldade as DifficultyEnum}
                            category={quiz.categoria.nome}
                        />
                    ))}
                
                </div>
            </div>
        </>
    );
}

import "./Home.scss";
import SelectInput, {
    InputOption,
} from "../../components/form/inputs/selectInput/SelectInput";
import GameCard from "../../components/gameCard/GameCard";
import { DifficultyEnum } from "../../models/Difficulty";
import IsNotLoggedRedirecter from "../../components/isNotLoggedRedirecter/IsNotLoggedRedirecter";
import { Quiz } from "../../models/Quiz";
import { useEffect, useState } from "react";
import { getAllQuiz } from "../../services/quiz";
import { getAllCategoria } from "../../services/categoria";

export default function Home() {
    const [categoriesOptions, setCategoriesOptions] = useState<InputOption[]>(
        []
    );
    const [selectedCategory, setSelectedCategory] = useState<string>();
    const [selectedDifficulty, setSelectedDifficulty] = useState<string>();

    const getCategories = async () => {
        const categoriasRes: InputOption[] = (await getAllCategoria()).map(
            (categoria) => {
                return {
                    value: categoria.nome,
                    label: categoria.nome,
                };
            }
        );
        setCategoriesOptions(categoriasRes);
    };
    const difficultyOptions = Object.values(DifficultyEnum).map(
        (difficulty) => {
            return {
                value: difficulty,
                label: difficulty,
            };
        }
    );
    const [quizzes, setQuizzes] = useState<Quiz[]>([]);
    const [shownQuizzes, setShownQuizzes] = useState<Quiz[]>([]);
    useEffect(() => {
        getCategories();
        getAllQuiz().then((quizzes) => {
            setQuizzes(quizzes);
            setShownQuizzes(quizzes);
        });
    },[]);
    useEffect(() => {
            let filteredQuizzes = quizzes;
            if (selectedCategory) {
                filteredQuizzes = filteredQuizzes.filter(
                    (quiz) => quiz.categoria.nome === selectedCategory
                );
            }
            if (selectedDifficulty) {
                filteredQuizzes = filteredQuizzes.filter(
                    (quiz) => quiz.dificuldade === selectedDifficulty
                );
            }
            setShownQuizzes(filteredQuizzes);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[ selectedCategory, selectedDifficulty]);
    return (
        <>
            <IsNotLoggedRedirecter />
            <div className="game-selection-container">
                <div className="game-search-container">
                    <div className="game-search-category-container">
                        <SelectInput
                            label="Categoria"
                            id="quiz-category"
                            placeholder="Selecione a categoria"
                            options={categoriesOptions}
                            onChange={(option) => {
                                setSelectedCategory(option);
                            }
                            }
                        ></SelectInput>
                    </div>
                    <div className="game-search-difficulty-container">
                        <SelectInput
                            label="Dificuldade"
                            id="quiz-difficulty"
                            placeholder="Selecione a dificuldade"
                            options={difficultyOptions}
                            onChange={(option) => {
                                setSelectedDifficulty(option);
                            }
                            }
                        ></SelectInput>
                    </div>
                </div>
                <div className="game-list-container">
                    {shownQuizzes.map((quiz, idx) => (
                        <GameCard
                            key={idx}
                            id={quiz.id || "0"}
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

import "./Home.scss";
import SelectInput from "../../components/form/inputs/selectInput/SelectInput";
import GameCard from "../../components/gameCard/GameCard";
import { DifficultyEnum } from "../../models/Difficulty";

export default function Home() {
    const categoriesOptions = ["Geografia"];
    const difficultyOptions = Object.values(DifficultyEnum)
    return (
        <>
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
                    <GameCard category="Geografia" difficulty="Moleza" name="A vida no semi-árido"/>
                    <GameCard category="Geografia" difficulty="Desafiador" name="Sobre as planícies"/>
                    <GameCard category="Geografia" difficulty="Impossível" name="Irlanda do norte"/>

                </div>
            </div>
        </>
    );
}

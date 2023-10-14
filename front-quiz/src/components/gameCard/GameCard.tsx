import { NavLink } from "react-router-dom";
import { OutlinedPlay } from "../../assets/images/OutlinedPlay";
import { Difficulty, DifficultyColorEnum } from "../../models/Difficulty";
import "./GameCard.scss";

interface GameCardProps {
    id: string;
    name: string;
    difficulty: Difficulty;
    category: string;
}

export default function GameCard({
    id,
    name,
    difficulty,
    category,
}: GameCardProps) {
    const cardColor = DifficultyColorEnum[difficulty];

    return (
        <NavLink to={`play-quiz/${id}`}>
            <div className="game-card" style={{ backgroundColor: cardColor }}>
                <div className="left-side">
                    <div className="play-button-container">
                        <OutlinedPlay/>
                    </div>
                    <div className="game-difficulty-container game-card-bottom-container">
                        <p className="game-difficulty">{difficulty}</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="game-title-container">
                        <h1 className="game-title">{name}</h1>
                    </div>
                    <div className="game-category-container game-card-bottom-container">
                        <p className="game-category">{category}</p>
                    </div>
                </div>
            </div>
        </NavLink>
    );
}

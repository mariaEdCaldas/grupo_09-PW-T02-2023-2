import { RankingSimble } from "../../assets/images/RankingSimble";
import { Ranking, RankingColorEnum, RankingEnum } from "../../models/Ranking";
import "./RankingCard.scss";

interface RankingCardProps {
    name: string;
    ranking: Ranking;
    score: number;
    isCurrentPlayer?: boolean;
}

export default function RankingCard({
    name,
    ranking,
    score,
    isCurrentPlayer
}: RankingCardProps) {
    const cardColor = RankingColorEnum[`${ranking}` as keyof typeof RankingColorEnum] || RankingColorEnum["default"];
    return (
            <div className={`ranking-card${isCurrentPlayer ? " current-player-rank" :""}`}>
                <div className="left-side">
                    <div className="play-button-container">
                        <RankingSimble rankingColor={cardColor}/>
                    </div>
                    <div className="ranking-Ranking-container ranking-card-bottom-container">
                        <p className="ranking-Ranking">{ranking}</p>
                    </div>
                </div>
                <div className="right-side">
                    <div className="ranking-title-container">
                        <h1 className="ranking-title">{isCurrentPlayer ? "Você" : name}</h1>
                    </div>
                    <div className="ranking-desc-container ranking-card-bottom-container">
                        <p className="ranking-desc">
                            {
                                `${(ranking && RankingEnum[ranking  as keyof typeof RankingEnum])||RankingEnum["default"]} - `
                            }
                            <span style={{color: cardColor}}>{score}QI</span>
                        </p>
                    </div>
                </div>
            </div>
    );
}

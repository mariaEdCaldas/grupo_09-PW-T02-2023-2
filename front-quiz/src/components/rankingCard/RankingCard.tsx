import { RankingSimble } from "../../assets/images/RankingSimble";
import { Ranking, rankingcolorEnum, RankingEnum } from "../../models/Ranking";
import "./RankingCard.scss";
import { getRank, RankingData } from '../../services/ranking'; 
import { useState, useEffect } from 'react';
import { db } from "../../services/firebaseConfig";

function Componente(){
    console.log('Rendering Componente'); 
    const [rankingData, setRankingData] = useState<RankingData[]>([]);
    const [loading, setLoading] = useState(true);
    const [forceRerender, setForceRerender] = useState(false);

    useEffect(()=>{
        let isMounted = true;   
        async function fetchRanking(){
            try {
                const rankingArray = await getRank();
                console.log('Ranking Array:', rankingArray);
                if (isMounted) {
                    console.log('Setting ranking data:', rankingArray);
                    setRankingData(rankingArray);
                    setLoading(false);
                    setForceRerender(prevState => !prevState);
                }          
            }catch (error){
                console.error('Error fetching ranking:', error);
            }
        }  
        fetchRanking(); 
        return ()=>{
            isMounted = false;
        };
    },[forceRerender]);
    console.log('Ranking Data:', rankingData);

    return (
        <div>
            {loading ? (
            <p>Loading...</p>):(
            
                rankingData.map((rankingItem: RankingData) => (
                <RankingCard
                key={rankingItem.user}
                name={rankingItem.user}
                ranking={ `${rankingItem.ranking}º` as `${number}\u00BA` }
                score={rankingItem.pontuacao}/>
                ))
            )}
        </div>
    );
} export { Componente };
  
interface RankingCardProps{
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
    console.log("Rendering RankingCard");
    const cardColor =
    rankingcolorEnum[`${ranking}` as keyof typeof rankingcolorEnum] ||
    rankingcolorEnum['default'];

    return (
        <div className={`ranking-card${isCurrentPlayer ? ' current-player-rank' : ''}`}>
            <div className="left-side">
            <div className="play-button-container">
                <RankingSimble rankingcolor={cardColor} />
            </div>
            <div className="ranking-Ranking-container ranking-card-bottom-container">
                <p className="ranking-Ranking">{ranking}</p>
            </div>
            </div>
            <div className="right-side">
            <div className="ranking-title-container">
                <h1 className="ranking-title">{isCurrentPlayer ? 'Você' : name}</h1>
            </div>
            <div className="ranking-desc-container ranking-card-bottom-container">
                <p className="ranking-desc">
                {`${(ranking && RankingEnum[ranking as keyof typeof RankingEnum]) || RankingEnum['default']} - `}
                <span style={{ color: cardColor }}>{score}QI</span>
                </p>
            </div>
            </div>
        </div>
    );
}

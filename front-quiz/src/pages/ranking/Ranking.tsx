
import { useEffect, useState } from "react";
import IsNotLoggedRedirecter from "../../components/isNotLoggedRedirecter/IsNotLoggedRedirecter"
import RankingCard from "../../components/rankingCard/RankingCard"
import "./Ranking.scss"
import { RankingData, getRank } from "../../services/ranking";

export default function Ranking(){
    const [rankingData, setRankingData] = useState<RankingData[]>([]);

    useEffect(()=>{
        try {
            getRank().then((rankingArray) => {
                setRankingData(rankingArray);
            })
        }catch (error){
            console.error('Erro ao buscar ranking:', error);
        }
    }, []);
    return(
        <>
            <IsNotLoggedRedirecter/>
            <div className="ranking-container">
                <h1 className="ranking-title">Ranking</h1>
                <div className="ranking-players-list">
                    {rankingData.sort( (a,b) => b.pontuacao - a.pontuacao).map((rankingItem: RankingData, index) => (
                        <RankingCard
                            key={rankingItem.user}
                            name={rankingItem.user}
                            ranking={ `${index+1}º` as `${number}\u00BA` }
                            score={rankingItem.pontuacao}/>
                    ))}
                </div>
            </div>
        </>
    )
}
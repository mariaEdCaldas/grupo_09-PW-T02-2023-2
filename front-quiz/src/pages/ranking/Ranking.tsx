
import IsNotLoggedRedirecter from "../../components/isNotLoggedRedirecter/IsNotLoggedRedirecter"
import RankingCard from "../../components/rankingCard/RankingCard"
import "./Ranking.scss"

export default function Ranking(){
    return(
        <>
            <IsNotLoggedRedirecter/>
            <div className="ranking-container">
                <h1 className="ranking-title">Ranking</h1>
                <div className="ranking-players-list">
                    <RankingCard score={120} ranking="1º" name="JogadorN1"/>
                    <RankingCard score={102} ranking="2º" name="BarbieCarioca"/>
                    <RankingCard score={97} ranking="3º" name="FiodorovitchKaranpoch" isCurrentPlayer/>
                </div>
            </div>
        </>
    )
}
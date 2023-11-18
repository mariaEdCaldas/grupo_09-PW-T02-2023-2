import DefaultButton from "../../components/buttons/DefaultButton";
import QuizAnswerButton from "../../components/buttons/QuizAnswerButton";
import IsNotLoggedRedirecter from "../../components/isNotLoggedRedirecter/IsNotLoggedRedirecter";
import "./Quiz.scss";

export default function Quiz() {
    const colors ={
        okColor: "#509D49",
        wrongColor: "#B93D3D",
    }
    const totalTime=60;
    const currentTime=30;
    const currentColor = currentTime/totalTime >= 1/3 ? colors.okColor : colors.wrongColor;
    return (
        <>
        <IsNotLoggedRedirecter/>
        <div className="quiz-play-container">
            <div className="quiz-play-answer">
                <h1 className="quiz-play-question-statement">
                    Qual a profissão do lendário “Neymar Jr” ?
                </h1>

                <div className="quiz-play-question-answers">
                    <div className="quiz-play-question-answer-container">
                        <QuizAnswerButton
                            backgroundColor="#2F5267"
                            color="white"
                            answerLetter="A"
                            content="Deus romano incomparável."
                        />
                    </div>
                    <div className="quiz-play-question-answer-container">
                        <QuizAnswerButton
                            backgroundColor="#2F5267"
                            color="white"
                            answerLetter="B"
                            content="Pós-doutor em neurologia."
                        />
                    </div>
                    <div className="quiz-play-question-answer-container">
                        <QuizAnswerButton
                            backgroundColor="#2F5267"
                            color="white"
                            answerLetter="C"
                            content="Dentista de cavalos da raça puro-sangue espanhora “Quistonpiori-Anari”. Conhecida por ser usada pelos antigos generais mongóis, após re-conquistar a província de Castelia."
                        />
                    </div>
                    <div className="quiz-play-question-answer-container">
                        <QuizAnswerButton
                            backgroundColor="#2F5267"
                            color="white"
                            answerLetter="D"
                            content="Apicultor de vespas argentinas
                            Famosas por coletar açúcares de “PANCs”.
                            E também por serem resistentes ao invérno rigoroso de regiões como a Patagônia.
                            "
                        />
                    </div>
                </div>
            </div>
            <div className="quiz-play-menu">
                <div className="quiz-play-menu-time-container">
                    <span className="quiz-play-menu-time-text">Faltam</span>
                    <div className="quiz-play-menu-time">
                        <span className="quiz-play-menu-time-count" style={{color:currentColor}}>{currentTime}</span>
                        <span className="quiz-play-menu-time-text quiz-play-menu-time-measure">segundos</span>
                    </div>
                </div>
                <div className="quiz-play-menu-action-container">
                    <DefaultButton backgroundColor="#B93D3D">PULAR</DefaultButton>
                </div>
            </div>
        </div>
        </>
    );
}

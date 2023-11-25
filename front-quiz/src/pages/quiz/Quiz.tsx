import { useNavigate, useParams } from "react-router-dom";
import DefaultButton from "../../components/buttons/DefaultButton";
import QuizAnswerButton from "../../components/buttons/QuizAnswerButton";
import IsNotLoggedRedirecter from "../../components/isNotLoggedRedirecter/IsNotLoggedRedirecter";
import "./Quiz.scss";
import { useEffect, useState } from "react";
import { Quiz } from "../../models/Quiz";
import { getQuizById } from "../../services/quiz";

export default function Quiz() {
    const navigateTo = useNavigate();
    const answersSimbles = ["A", "B", "C", "D"];
    const colors = {
        okColor: "#509D49",
        wrongColor: "#B93D3D",
    };
    const totalTime = 30;
    const totalPontPorQuestao = 10;
    const multiplicadorSemErro = 0.4;

    const [pontuacao, setPontuacao] = useState(0);
    const [rodadasSemErro, setRodadasSemErro] = useState(0);
    const [currentTime, setCurrentTime] = useState(totalTime); 
    
    const currentColor =
        currentTime / totalTime >= 1 / 3 ? colors.okColor : colors.wrongColor;
    
    const { id: quizId } = useParams();

    const [currentQuiz, setCurrentQuiz] = useState<Quiz>({} as Quiz);
    const [currentQuestion, setCurrentQuestion] = useState(0);

    const nextQuestion = (_pontuacao?:number) => {
        if (currentQuestion+1 < currentQuiz.questoes.length){
            setCurrentQuestion(currentQuestion + 1);
            setCurrentTime(totalTime);
        }else{
            alert(`FIM!!!\nSua pontuação foi: ${_pontuacao||pontuacao}`)
            navigateTo("/")
        }
    }

    const handleAcerto = () => {
        alert("acertou")
        const pontuacaoQuestao = totalPontPorQuestao + (totalPontPorQuestao * multiplicadorSemErro * rodadasSemErro );
        setPontuacao(pontuacao + pontuacaoQuestao);
        setRodadasSemErro(rodadasSemErro + 1);
        nextQuestion(pontuacao + pontuacaoQuestao);
    }
    const handleErro = () => {
        setRodadasSemErro(0);
        nextQuestion();
    }

    useEffect(() => {
        if (quizId) {
            getQuizById(quizId).then((quiz) => {
                if (quiz) setCurrentQuiz(quiz);
            });
        }
    }, [quizId]);
    useEffect(() => {
        if (currentTime <= 0) {
          alert("Tempo acabou, piá!")
          nextQuestion();
          return;
        }
    
        const timerId = setTimeout(() => {
          setCurrentTime(time => time - 1);
        }, 1000);
    
        return () => clearTimeout(timerId);
      } );

    return (
        <>
            <IsNotLoggedRedirecter />
            <div className="quiz-play-container">
                <div className="quiz-play-answer">
                    <h1 className="quiz-play-question-statement">
                        {(currentQuiz.questoes &&
                            currentQuiz.questoes[currentQuestion].enunciado) ||
                            ""}
                    </h1>

                    <div className="quiz-play-question-answers">
                        {currentQuiz.questoes &&
                            currentQuiz.questoes[currentQuestion].respostas.map(
                                (answer, idx) => {
                                    return (
                                        <div className="quiz-play-question-answer-container" key={idx}>
                                            <QuizAnswerButton
                                                backgroundColor="#2F5267"
                                                color="white"
                                                answerLetter={
                                                    answersSimbles[idx]
                                                }
                                                onClick={
                                                    (()=>{
                                                        if(answer.correta)
                                                            handleAcerto()
                                                        else
                                                            handleErro()
                                                    })
                                                }
                                                content={answer.resposta || ""}
                                            />
                                        </div>
                                    );
                                }
                            )}
                    </div>
                </div>
                <div className="quiz-play-menu">
                    <div className="quiz-play-menu-time-container">
                        <span className="quiz-play-menu-time-text">Faltam</span>
                        <div className="quiz-play-menu-time">
                            <span
                                className="quiz-play-menu-time-count"
                                style={{ color: currentColor }}
                            >
                                {currentTime}
                            </span>
                            <span className="quiz-play-menu-time-text quiz-play-menu-time-measure">
                                segundos
                            </span>
                        </div>
                    </div>
                    <div className="quiz-play-menu-action-container">
                        <DefaultButton
                            type="button"
                            onClick={()=>{nextQuestion()}}
                            backgroundColor="#B93D3D"
                        >
                            PULAR
                        </DefaultButton>
                    </div>
                </div>
            </div>
        </>
    );
}

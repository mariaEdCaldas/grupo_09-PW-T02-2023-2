import { Questao, Quiz } from "../models/Quiz";

function setStoredQuizEdit(quizEdit : Quiz) {
    sessionStorage.setItem("quizEdit", JSON.stringify(quizEdit));
}
function getStoredQuizEdit() : Quiz|undefined {
    const quizEdit = sessionStorage.getItem("quizEdit")
    if (quizEdit === null) {
        return undefined;
    }
    const quizObject = JSON.parse(quizEdit) as Quiz;
    return quizObject;
}

function addStoredQuestion(question: Questao){
    const quizEdit = getStoredQuizEdit();
    if(quizEdit === undefined) return;
    quizEdit.questoes.push(question);
    setStoredQuizEdit(quizEdit);
}

export { setStoredQuizEdit, getStoredQuizEdit, addStoredQuestion };

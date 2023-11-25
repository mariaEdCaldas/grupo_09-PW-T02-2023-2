import { collection, getDocs, getDoc, addDoc, doc } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Categoria, Quiz } from "../models/Quiz";


async function getAllQuiz() : Promise<Quiz[]> {
    const quizSnap = await getDocs(collection(db, "quiz"))
    const quizList = await Promise.all(quizSnap.docs.map(async docQuiz =>{
        const result = docQuiz.data()
        const categoriaRes = (((await getDoc(result.categoria)).data() )) as Categoria
        result.categoria = categoriaRes
        result.id = docQuiz.id
        return result as Quiz
    }))
    return quizList
}

async function getQuizById(id: string) : Promise<Quiz|undefined> {
    const quizSnap = await getDoc(doc(db, "quiz", id))
    const result = quizSnap.data()
    if(result){
        const categoriaRes = (((await getDoc(result.categoria)).data() )) as Categoria
        result.categoria = categoriaRes
        result.id = quizSnap.id
        return result as Quiz
    }
    return undefined
}

async function saveQuiz(quiz: Quiz) : Promise<string|undefined> {
    quiz.categoria = doc(db, "categoria", quiz.categoria.id||"0") as unknown as Categoria
    let response
    try{
        response = await addDoc(collection(db, "quiz"), quiz)
    }
    catch(error){
        console.error(error)
        return undefined
    }
    return response.id || undefined
}

export { getAllQuiz, saveQuiz, getQuizById}
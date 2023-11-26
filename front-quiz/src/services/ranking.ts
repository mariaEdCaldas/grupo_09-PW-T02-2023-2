import {
    collection,
    getDocs,
    updateDoc,
    getDoc,
    doc,
    setDoc,
    addDoc,
    query,
    where,
    limit,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";
import { RankingData } from "../models/RankingData";

async function addMatchInfo(quizID:string, userID:string){
    await addDoc(collection(db, "partidas"), {
        quizID: quizID,
        userID: userID,
    });
}

async function playerPlayedQuiz(quizID:string, userID:string){
    const queryRes = await query(collection(db, "partidas"), where("quizID", "==", quizID), where("userID", "==", userID), limit(1));
    const querySnapshot = await getDocs(queryRes);
    return (querySnapshot.size > 0);
}

export async function setUserRank(quizID:string, pontuacaoNova: number) {
    const email = auth.currentUser?.email;
    const userID = auth.currentUser?.uid;
    const username = auth.currentUser?.displayName;
    
    if ((!email) || (!userID) || (!quizID)) return;
    if(await playerPlayedQuiz(quizID, userID)) return;

    const userRankingDoc = await getDoc(doc(db, "ranking", email));
    const userRankingData = userRankingDoc.data();
    await addMatchInfo(quizID, userID);

    if (userRankingData) {
        console.log(userRankingData);
        await updateDoc(userRankingDoc.ref,{
            pontuacao: (userRankingData as unknown as RankingData).pontuacao + pontuacaoNova,
        });
    } else {
        await setDoc(doc(db, "ranking", email), { 
            user: username||"unknown user", //resolvi por deixar o maluco sem nome como unknown user. Se o cabra burlar o registro, é o mínimo que o sistema pode permitir pro cabra :(
            pontuacao: pontuacaoNova,
        });
    }
}


export async function getRank(): Promise<RankingData[]> {
    const querySnapshot = await getDocs(collection(db, "ranking"));
    return querySnapshot.docs.map((doc) => doc.data() as RankingData);
}

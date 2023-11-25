import {
    collection,
    getDocs,
    updateDoc,
    getDoc,
    doc,
    setDoc,
} from "firebase/firestore";
import { db } from "./firebaseConfig";
import { auth } from "./firebaseConfig";
import { RankingData } from "../models/RankingData";

export async function setUserRank(pontuacaoNova: number) {
    console.log(pontuacaoNova);
    console.log("Request received! Iha!");
    const email = auth.currentUser?.email;
    const username = auth.currentUser?.displayName;
    if (!email) return;
    const userRankingDoc = await getDoc(doc(db, "ranking", email));
    const userRankingData = userRankingDoc.data();
    if (userRankingData) {
        console.log("Updating doc");
        console.log(userRankingData);
        await updateDoc(userRankingDoc.ref,{
            pontuacao: (userRankingData as unknown as RankingData).pontuacao + pontuacaoNova,
        });
    } else {
        console.log("Adding doc");
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

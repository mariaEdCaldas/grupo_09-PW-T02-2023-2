import { collection, getDocs, getDoc, addDoc, doc, query, where, updateDoc} from "firebase/firestore";
import { db } from "./firebaseConfig";

async function setUserRank(email: string, pontuacaoNova: number){
    const q = query(collection(db, "ranking"), where("user", "==", email));
    if(q){
        const querySnapshot = await getDocs(q);

        //await Promise.all(() => {
            querySnapshot.docs.map((doc) => 
                    updateDoc(doc.ref, {
                        pontuacao: doc.data().pontuacao + pontuacaoNova
                    }
                )
            )//}
        //)
    } else {
        addDoc(collection(db, "ranking"), {
            user: email,
            pontuacao: pontuacaoNova
        })
    }
}

async function getRank(){
    const querySnapshot = await getDocs(collection(db, "ranking"));
    return querySnapshot
}
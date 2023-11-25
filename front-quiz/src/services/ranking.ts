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
}import { collection, getDocs, getDoc, addDoc, doc, query, where, updateDoc} from "firebase/firestore";
import { db } from "./firebaseConfig";

  export interface RankingData {
    user: string;
    ranking: string; 
    pontuacao: number;
    
  }
  
  export async function setUserRank(email: string, pontuacaoNova: number) {
    const q = query(collection(db, 'ranking'), where('user', '==', email));
  
    if (q) {
      const querySnapshot = await getDocs(q);
  
      querySnapshot.docs.map((doc) =>
        updateDoc(doc.ref, {
          pontuacao: doc.data().pontuacao + pontuacaoNova,
        })
      );
    } else {
      addDoc(collection(db, 'ranking'), {
        user: email,
        pontuacao: pontuacaoNova,
      });
    }
  }
  
  export async function getRank(): Promise<RankingData[]> {
    const querySnapshot = await getDocs(collection(db, 'ranking'));
    return querySnapshot.docs.map((doc) => doc.data() as RankingData);
  }
  

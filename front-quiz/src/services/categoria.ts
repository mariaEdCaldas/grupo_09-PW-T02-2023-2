import { collection, getDocs } from "firebase/firestore";
import { db } from "./firebaseConfig";
import { Categoria } from "../models/Quiz";


async function getAllCategoria() : Promise<Categoria[]> {
    const categoriaSnap = await getDocs(collection(db, "categoria"))
    const categoriaList = await Promise.all(categoriaSnap.docs.map(async docCategoria =>{
        const docc : Categoria = docCategoria.data() as Categoria
        docc.id = docCategoria.id
        return docc as Categoria
    }))
    return categoriaList
}

export { getAllCategoria }
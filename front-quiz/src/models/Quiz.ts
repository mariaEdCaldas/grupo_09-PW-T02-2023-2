import { Difficulty } from "./Difficulty";

interface Quiz{
    id?: string;
    nome: string;
    questoes: Questao[];
    categoria: Categoria;
    dificuldade: Difficulty | '';
}

interface Categoria{
    id?: string;
    nome: string;

}

interface Questao{
    id?: string;
    enunciado: string;
    respostas: Resposta[];
}

interface Resposta{
    id?: string;
    resposta: string;
    correta: boolean;
}

export {type Quiz, type Questao, type Resposta, type Categoria}
import { Routes, Route } from "react-router-dom";
import Home from "./home/Home";
import Login from "./login/Login";
import Registrar from "./Registrar";
import Ranking from "./ranking/Ranking";
import Quiz from "./Quiz";
import QuizBuilder from "./quizBuilder/QuizBuilder";
import QuestionBuilder from "./questionBuilder/QuestionBuilder";

export default function Router() {
    return (
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/registrar" Component={Registrar}></Route>
            <Route path="/ranking" Component={Ranking}></Route>
            <Route path="/play" Component={Quiz}></Route>
            <Route path="/create-quiz" Component={QuizBuilder}></Route>
            <Route path="/create-quiz/create-question" Component={QuestionBuilder}></Route>
            <Route path="/play-quiz/:id" Component={Quiz}></Route>
        </Routes>
    );
}

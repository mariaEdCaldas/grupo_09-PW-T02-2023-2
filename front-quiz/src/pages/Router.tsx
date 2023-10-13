import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Registrar from "./Registrar";
import Ranking from "./Ranking";
import Quiz from "./Quiz";
import QuizBuilder from "./QuizBuilder";
import QuestionBuilder from "./QuestionBuilder";

export default function Router() {
    return (
        <Routes>
            <Route path="/" Component={Home}></Route>
            <Route path="/login" Component={Login}></Route>
            <Route path="/registrar" Component={Registrar}></Route>
            <Route path="/ranking" Component={Ranking}></Route>
            <Route path="/play" Component={Quiz}></Route>
            <Route path="/quiz-build" Component={QuizBuilder}></Route>
            <Route path="/question-build" Component={QuestionBuilder}></Route>
        </Routes>
    );
}

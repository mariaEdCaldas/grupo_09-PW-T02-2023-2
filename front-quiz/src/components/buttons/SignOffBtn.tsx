import { useNavigate } from "react-router-dom";
import { signOut } from "../../services/authService";
import "./SignOffBtn.scss";

interface SignOffBtnProps{
    isLogged: boolean;
    setIsLogged: (isLogged: boolean) => void;
}

export default function SignOffBtn({isLogged, setIsLogged}: SignOffBtnProps){
    
    const navigateTo = useNavigate()
    const handleSignOff = async () => {
        await signOut();
        sessionStorage.clear();
        localStorage.clear();
        if(isLogged){
            setIsLogged(false)
            navigateTo("/login")
        }

    }
    return(
        <>
            <div className="menu-sign-off-btn" onClick={handleSignOff}>
                Sair    
            </div>
        </>
    )
}

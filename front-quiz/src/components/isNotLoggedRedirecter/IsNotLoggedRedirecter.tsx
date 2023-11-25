import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { auth } from "../../services/firebaseConfig"

export default function IsNotLoggedRedirecter(){
    const navigateTo = useNavigate()
    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            if(!user){
                navigateTo("/login")
            }
        })
    })
    return(<></>)
}

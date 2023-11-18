import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { AuthResponse } from "../models/AuthResponse";
import {auth} from "./firebaseConfig"

async function createUser(email: string, password: string) : Promise<AuthResponse>{
    try{
        await createUserWithEmailAndPassword(auth, email, password)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error: any){
        console.log(error)
        return new AuthResponse(false, {message: error.message})
    }
    return new AuthResponse(true)
}

async function signIn(email: string, password: string) : Promise<AuthResponse>{
    try{
        await signInWithEmailAndPassword(auth, email, password)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error: any){
        console.log(error)
        return new AuthResponse(false, {message: error.message})
    }
    return new AuthResponse(true)
}

async function signOut() : Promise<AuthResponse>{
    try{
        if(auth.currentUser){
            await auth.signOut()
        }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    }catch(error: any){
        console.log(error)
        return new AuthResponse(false, {message: error.message})
    }
    return new AuthResponse(true)
}

export {createUser, signIn, signOut}
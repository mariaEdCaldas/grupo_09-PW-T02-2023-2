import {auth} from "../services/firebaseConfig"
import EntryForm from "../components/form/entryForm/EntryForm";
import FormBottomAction from "../components/form/formBottomAction/FormBottomAction";
import TextInput from "../components/form/inputs/textInput/TextInput";
import { createUser } from "../services/authService";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export default function Registrar() {
    const navigateTo = useNavigate()
    useEffect(() => {
        //check if user is logged in
        auth.onAuthStateChanged((user) => {
            if(user){
                navigateTo("/")
            }
        })
    })
    
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = e.currentTarget.username.value;
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        try{
            const authRes = await createUser(username,email, password)
            if(authRes.getSuccess())
                navigateTo("/")
        }
        catch(error){
            console.log(error);
        }
    }

    return (
        <EntryForm
            title="Registrar"
            onSubmit={handleSubmit}
            inputs={
                <>
                    <TextInput
                        id="username"
                        label="Nome"
                        placeholder="Insira seu nome"
                        required
                    ></TextInput>
                    <TextInput
                        id="email"
                        placeholder="seu@email.com"
                        label="E-mail"
                        type="email"
                        required
                    ></TextInput>
                    <TextInput
                        id="password"
                        placeholder="Insira uma senha"
                        label="Senha"
                        type="password"
                        required
                    ></TextInput>
                </>
            }
            submitLabel="Vamos lá!"
            bottom={
                <>
                    <FormBottomAction
                        label="Já possuo um login"
                        target="/login"
                    />
                </>
            }
        />
    );
}
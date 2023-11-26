import { useEffect } from "react";
import EntryForm from "../../components/form/entryForm/EntryForm";
import FormBottomAction from "../../components/form/formBottomAction/FormBottomAction";
import TextInput from "../../components/form/inputs/textInput/TextInput";
import "./Login.scss";
import { auth } from "../../services/firebaseConfig";
import { useNavigate } from "react-router-dom";
import { signIn } from "../../services/authService";

export default function Login() {
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
        // const name = e.currentTarget.username.value;
        const email = e.currentTarget.email.value;
        const password = e.currentTarget.password.value;
        try{
            const authRes = await signIn(email, password)
            if(authRes.getSuccess())
                navigateTo("/")
        }
        catch(error){
            console.error(error);
        }
    }
    return (
        <EntryForm
            title="Login"
            onSubmit={handleSubmit}
            inputs={
                <>
                    <TextInput
                        id="email"
                        label="E-mail"
                        placeholder="seu@email.com"
                        type="email"
                        required
                    ></TextInput>
                    <TextInput
                        id="password"
                        label="Senha"
                        placeholder="Insira uma senha"
                        type="password"
                        required
                    ></TextInput>
                </>
            }
            submitLabel="Entrar"
            bottom={
                <>
                    <FormBottomAction
                        label="Esqueci minha senha"
                        target="/reset-pass"
                    />
                    <FormBottomAction
                        label="Não tenho cadastro"
                        target="/registrar"
                    />
                </>
            }
        />
    );
}

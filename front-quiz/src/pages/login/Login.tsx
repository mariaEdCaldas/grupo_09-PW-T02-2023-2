import EntryForm from "../../components/form/entryForm/EntryForm";
import FormBottomAction from "../../components/form/formBottomAction/FormBottomAction";
import TextInput from "../../components/form/inputs/textInput/TextInput";
import "./Login.scss";

export default function Login() {
    return (
        <EntryForm
            title="Login"
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

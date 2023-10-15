import EntryForm from "../components/form/entryForm/EntryForm";
import FormBottomAction from "../components/form/formBottomAction/FormBottomAction";
import TextInput from "../components/form/inputs/textInput/TextInput";

export default function Registrar() {
    return (
        <EntryForm
            title="Registrar"
            inputs={
                <>
                    <TextInput
                        id="name"
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
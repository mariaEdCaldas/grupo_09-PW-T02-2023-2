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
                        required
                    ></TextInput>
                    <TextInput
                        id="email"
                        label="E-mail"
                        type="email"
                        required
                    ></TextInput>
                    <TextInput
                        id="password"
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
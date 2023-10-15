import "./EntryForm.scss"
import FormBottom from "../formBottomAction/FormBottom";
import DefaultButton from "../../buttons/DefaultButton";

interface EntryFormProps {
    title?: string;
    inputs: React.ReactNode;
    submitLabel: string;
    bottom?: React.ReactNode;
    onSubmit?: (event: React.FormEvent<HTMLFormElement>) => void;
}
export default function EntryForm({title, inputs, bottom, submitLabel, onSubmit}: EntryFormProps) {
    return (
        <div className="entry-form-container">
            <h1 className="entry-form-title">{title && title}</h1>
            <form id="login-form" className="entry-form" onSubmit={onSubmit}>
                <div className="inputs-container">
                    {inputs}
                </div>
                <FormBottom>
                    {bottom && bottom}
                </FormBottom>
                <div className="entry-form-submit-button-container">
                    <DefaultButton type="submit">{submitLabel}</DefaultButton>
                </div>
            </form>
        </div>
    );
}

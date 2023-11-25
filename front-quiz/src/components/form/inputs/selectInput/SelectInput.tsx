import "./SelectInput.scss";

interface InputOption {
    value: string;
    label: string;
}

interface SelectInputProps {
    id: string;
    label?: string;
    options: InputOption[];
    placeholder?: string;
    value?: string;
    required?: boolean;
    onChange?: (value: string) => void;
}

export default function SelectInput(props: SelectInputProps) {
    return (
        <div key={props.id} className="select-input-container">
            {props.label && (
                <label htmlFor={props.id} className="select-input-label">
                    {props.label}
                </label>
            )}
            <select
                id={props.id}
                name={props.id}
                className="select-input"
                value={props.value && props.value}
                required={!!props.required}
                defaultValue={props.placeholder && ""}
                onChange={(e) =>
                    props.onChange && props.onChange(e.target.value)
                }
            >
                {props.placeholder && (
                    <option value="" disabled hidden>
                        {props.placeholder}
                    </option>
                )}
                {props.options &&
                    props.options.map((option, index) => {
                        return (
                            <option key={index} value={option.value}>
                                {option.label}
                            </option>
                        );
                    })}
            </select>
        </div>
    );
}
export { type InputOption }
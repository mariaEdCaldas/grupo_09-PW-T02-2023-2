import "./TextInput.scss"

interface TextInputProps {
    id: string
    label: string,
    placeholder?: string,
    value?: string,
    type?: string,
    required?: boolean,
    onChange?: (value: string) => void
}

export default function TextInput(props: TextInputProps) {
    return(
        <div key={props.id} className="text-input-container">
            <label htmlFor={props.id} className="text-input-label">{props.label}</label>
            <input id={props.id}
                name={props.id}
                className="text-input" 
                type= {props.type ? props.type : "text"}
                placeholder={props.placeholder && props.placeholder}
                value={ props.value && props.value}
                required={!!props.required}
                onChange={(e) => props.onChange && props.onChange(e.target.value)}
            />
        </div>
    )
}
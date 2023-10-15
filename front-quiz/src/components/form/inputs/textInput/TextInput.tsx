import "./TextInput.scss"

interface TextInputProps{
    id: string
    label: string,
    placeholder?: string,
    value?: string,
    type?: string,
    required?: boolean,
    maxLength?: number,
    className?: string,
    onChange?: (value: string) => void
}

export default function TextInput(props: TextInputProps) {
    const elementClass = "text-input".concat(props.className ? " ".concat(props.className) : "")
    return(
        <div key={props.id} className="text-input-container">
            <label htmlFor={props.id} className="text-input-label">{props.label}</label>
            {props.type == "textarea"
                ? <textarea id={props.id}
                    maxLength={props.maxLength && props.maxLength}
                    name={props.id}
                    className={elementClass} 
                    placeholder={props.placeholder && props.placeholder}
                    value={ props.value && props.value}
                    required={!!props.required}
                    onChange={(e) => props.onChange && props.onChange(e.target.value)}
                />
                :
                <input id={props.id}
                maxLength={props.maxLength && props.maxLength}
                name={props.id}
                className={elementClass} 
                type= {props.type ? props.type : "text"}
                placeholder={props.placeholder && props.placeholder}
                value={ props.value && props.value}
                required={!!props.required}
                onChange={(e) => props.onChange && props.onChange(e.target.value)}
            />
            }
        </div>
    )
}
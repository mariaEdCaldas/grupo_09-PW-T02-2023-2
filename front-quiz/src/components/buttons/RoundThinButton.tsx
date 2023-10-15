import "./RoundThinButton.scss"


interface RoundThinButtonProps {
    children: string;
    backgroundColor: string;
    color: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: () => void;
}

export default function RoundThinButton(props: RoundThinButtonProps) {
    return (
        <button
            className="round-thin-button"
            onClick={props.onClick && props.onClick}
            type={props.type ? props.type : "button"}
            style={{backgroundColor: props.backgroundColor, color: props.color}}
        >
            {props.children}
        </button>
    );
}

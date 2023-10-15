import "./DefaultButton.scss"
interface DefaultButtonProps {
    children: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    backgroundColor?: string;
    color?: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function DefaultButton({
    children: label,
    type, onClick,
    backgroundColor,
    color
}: DefaultButtonProps) {
    return (
        <button
            type={type || "button"}
            className="default-button"
            onClick={(onClick && type == "button") ? onClick : undefined}
            style={{backgroundColor:backgroundColor, color:color}}
        >
            {label}
        </button>
    );
}

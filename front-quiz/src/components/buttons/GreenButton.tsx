import "./GreenButton.scss"
interface GreenButtonProps {
    children: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export default function GreenButton({
    children: label,
    type, onClick
}: GreenButtonProps) {
    return (
        <button
            type={type || "button"}
            className="green-button"
            onClick={(onClick && type == "button") ? onClick : undefined}
        >
            {label}
        </button>
    );
}

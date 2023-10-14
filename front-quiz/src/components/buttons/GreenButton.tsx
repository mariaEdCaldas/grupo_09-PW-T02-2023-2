import "./GreenButton.scss"
interface GreenButtonProps {
    children: string;
    type?: React.ButtonHTMLAttributes<HTMLButtonElement>["type"];
}

export default function GreenButton({
    children: label,
    type,
}: GreenButtonProps) {
    return (
        <button
            type={type || "button"}
            className="green-button"
            form="login-form"
        >
            {label}
        </button>
    );
}

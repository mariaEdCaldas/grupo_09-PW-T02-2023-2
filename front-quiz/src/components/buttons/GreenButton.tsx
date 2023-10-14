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
            className="entry-form-submit-button"
            form="login-form"
        >
            {label}
        </button>
    );
}

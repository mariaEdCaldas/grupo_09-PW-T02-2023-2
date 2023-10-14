import "./FormBottomAction.scss"
import { NavLink } from "react-router-dom";

interface FormBottomActionProps {
    label: string;
    target: string;
}

function FormBottomAction({label, target}:FormBottomActionProps){
    return(
        <div className="form-bottom-action">
            <NavLink to={target}>
                {label}
            </NavLink>
        </div>
    )
}


export default FormBottomAction;
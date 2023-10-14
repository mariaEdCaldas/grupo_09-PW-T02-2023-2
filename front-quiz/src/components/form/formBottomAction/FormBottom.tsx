import "./FormBottom.scss"
interface FormBottomProps {
    children: React.ReactNode;
}

function FormBottom({children} : FormBottomProps){
    return(
        <div className="form-bottom">
            {children}
        </div>
    )
}

export default FormBottom;
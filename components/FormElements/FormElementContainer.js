
import FormElementsStyles from "../../styles/Structure/FormElements.module.css";
const FormElementsContainer = (props)=>{

        return(
            <div className = {`${FormElementsStyles.FormElementsContainer} ${props.focusClass ?'focused':''}` }>
                {props.children}
            </div>
        )

}

export default FormElementsContainer
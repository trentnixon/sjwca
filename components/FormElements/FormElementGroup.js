
import FormElementsStyles from "../../styles/Structure/FormElements.module.css";
const FormElementGroup = (props)=>{

        return(
            <div className = {FormElementsStyles.FormElementGroup}>
                {props.children}
            </div>
        )

}

export default FormElementGroup
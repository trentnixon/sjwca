import StructureStyles from "../../styles/Structure/Structure.module.css";
const FullWidthContainer = (props)=>{
    return(
        <div className={`${StructureStyles.BaseLine}`}>
            <div className={` ${StructureStyles.FullWidth}  `}>
                {props.children}
            </div>
        </div>
    )
}

export default FullWidthContainer;
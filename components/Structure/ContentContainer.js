import StructureStyles from "../../styles/Structure/Structure.module.css";
const ContentContainer = (props)=>{
    return(
        <div className={`${StructureStyles.BaseLine}`}>
            <div className={` ${StructureStyles.ContentWidth}  `}>
                {props.children}
            </div>
        </div>
    )
}

export default ContentContainer;
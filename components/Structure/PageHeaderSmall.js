import StructureStyles from "../../styles/Structure/Structure.module.css";
import { H1, H2, H3, H4, P,P_ERROR, S} from "../../components/type";

const PageHeaderSmall = (props)=>{
    const {HeaderCopy,SubCopy, BGIMG} = props;

    return(
        <div className={StructureStyles.PageHeaderSmall} >
            <div className={StructureStyles.HeaderCopy}>
                <H1>{HeaderCopy}</H1>
                <H2>{SubCopy}</H2>
            </div>
            <div className={StructureStyles.FixedHeaderIMG} style={{backgroundImage: "url(" + BGIMG + ")"}}></div>
        </div>
    )
}
export default PageHeaderSmall;  
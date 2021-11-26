import StructureStyles from "../../styles/Structure/Structure.module.css";
import { H1, H2 } from "../../components/type";


const  getRandomIntInclusive = (min, max) =>{
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }

const PageHeaderSmall = (props)=>{
    const {HeaderCopy,SubCopy, BGIMG} = props;
 console.log(getRandomIntInclusive(1,10))
    return(
        <div className={StructureStyles.PageHeaderSmall} >
            <div className={StructureStyles.HeaderCopy}>
                <H1>{HeaderCopy}</H1>
                <H2>{SubCopy}</H2>
            </div>
            <div className={StructureStyles.FixedHeaderIMG} style={{backgroundImage: "url(/images/BGIMG/BG_" + getRandomIntInclusive(1,10) + ".jpg)"}}></div>
        </div>
    )
}
export default PageHeaderSmall;  

import { useState } from "react";
import GlobalFooterstyles from "../../styles/Structure/GlobalFooter.module.css"
import { P } from "../type";


const GlobalFooter = ()=>{
    const [Year,setYear] = useState(new Date().getFullYear())


    return(
        <div className={GlobalFooterstyles.Container}>
            <div className={GlobalFooterstyles.Tab}>
                    <P>Copyright © {Year}. Sydney Junior Winter Cricket Association</P>
            </div>
            
        </div>
    )
}
export default GlobalFooter;
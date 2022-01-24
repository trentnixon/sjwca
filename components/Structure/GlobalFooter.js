
import { useState } from "react";
import Link from 'next/link'
import GlobalFooterstyles from "../../styles/Structure/GlobalFooter.module.css"
import { P } from "../type";


const GlobalFooter = ()=>{
    const [Year,setYear] = useState(new Date().getFullYear())


    return(
        <div className={GlobalFooterstyles.Container}>

            <div  className={GlobalFooterstyles.FooterLinks}>
                <p><Link href="/mission">Our Mission</Link></p>
                <p><Link href="/objectives">Objectives</Link></p>
            </div>

            <div className={GlobalFooterstyles.Tab}>
           
                    <P>Copyright © {Year}. Sydney Junior Winter Cricket Association</P>
                   
            </div>
            
        </div>
    )
}
export default GlobalFooter; 
//<p><a href="https://www.sydneyjuniorwintercricket.org.au/assets/img/constitution.pdf" target='_blank'>constitution</a></p>
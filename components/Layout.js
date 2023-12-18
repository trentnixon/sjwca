import StructureStyles from "../styles/Structure/Structure.module.css";
import {useHost} from '../actions/useHost'
import ContentContainer from "../components/Structure/ContentContainer"

import Nav from "../components/Nav"
import Meta from "./Meta"
import GlobalFooter from "./Structure/GlobalFooter"
import useSWR from 'swr';
import { server } from "../config/index"
import LoadingAnimation from "./Structure/PageLoader"
import { H2 } from "./type";
import { useEffect } from "react";

const SJWCA_Layout =  ({children})=>{
    const IsOpen = false

    const fetcher = (url) => fetch(url).then((res) => res.json());

    const { data, error } =  useSWR(`${server}api/logosmall`, fetcher)

  
        if (error) return  <div className="Container">Failed to load</div>
        if (!data) return  <LoadingPage />
        return(
            <>
                <Meta />
                    { 
                        IsOpen ?<Nav data={data}/>:false
                    }
                
                    <div className="Container">
                        <main>{children}</main>
                    </div>

                    {
                        IsOpen ? <GlobalFooter />:false
                    }
               
            </>
        )
}

export default SJWCA_Layout;


const LoadingPage = ()=>{
        return(
            <div className={StructureStyles.Outer}>
                <ContentContainer>
                <H2>Fetching SJWCA Content</H2> 
                <LoadingAnimation />
                </ContentContainer>
            </div>
        ) 
}

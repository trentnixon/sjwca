import Nav from "../components/Nav"
import Meta from "./Meta"
import GlobalFooter from "./Structure/GlobalFooter"
import useSWR from 'swr';
import { server } from "../config/index"
import LoadingAnimation from "./Structure/PageLoader"
import { H2 } from "./type";

const SJWCA_Layout =  ({children })=>{

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR(`${server}api/logosmall`, fetcher)

  
        if (error) return  <div className="Container">Failed to load</div>
        if (!data) return  <LoadingPage />
        return(
            <>
                <Meta />
                <Nav data={data}/>
                    <div className="Container">
                        <main>{children}</main>
                    </div>
                <GlobalFooter />
            </>
        )
}

export default SJWCA_Layout;


const LoadingPage = ()=>{
        return(
            <div className="Container">
                <H2>Loading Page Content</H2>
                <LoadingAnimation />
            </div>
        )
}
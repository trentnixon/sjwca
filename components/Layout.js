import Nav from "../components/Nav"
import Meta from "./Meta"
import GlobalFooter from "./GlobalFooter"
import useSWR from 'swr';
import { server } from "../config/index"


const SJWCA_Layout =  ({children })=>{

    const fetcher = (url) => fetch(url).then((res) => res.json());
    const { data, error } =  useSWR(`${server}api/logosmall`, fetcher)

  
        if (error) return <div>Failed to load</div>
        if (!data) return <div>Loading...</div>
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
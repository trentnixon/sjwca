import Nav from "../components/Nav"
import Header from "../components/Header";
import Meta from "./Meta"

const SJWCA_Layout = ({children })=>{
        return(
            <>
                <Meta />
                <Nav />
                    <div className="Container">
                        <Header />
                        <main>{children}</main>
                    </div>
            </>
        )
}

export default SJWCA_Layout;
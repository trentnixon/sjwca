import Headerstyles from "../styles/Header.module.css"

const Header = ({tagline})=>{
    return(
        <div className={Headerstyles.header}>
            <h2>{tagline}</h2>
        </div>
    )
}
export default Header
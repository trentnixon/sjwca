import { H1,P } from "../type";

const ChangeMyDetailsERROR = ({setProgress, PlayerResponse})=>{
    return(
        <>
            
            <H1>ERROR</H1>
            <P>{PlayerResponse.msg}</P>
        </>
    )
}
export default ChangeMyDetailsERROR;
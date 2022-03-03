import { useState } from "react";
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import SupportersIcons from "../components/Structure/SupportersIcons"
// Sections
import ChangeMyDetailsLanding from "../components/ChangeMyDetails/Landing"
import ChangeMyDetailsSelectPlayer from "../components/ChangeMyDetails/SelectPlayer"
import ChangeMyDetailsForm from '../components/ChangeMyDetails/ChangePlayerForm'
import ChangeMyDetailsSubmitted from '../components/ChangeMyDetails/Submitted'
import ChangeMyDetailsERROR from '../components/ChangeMyDetails/ERROR'


const ChangeMyDetails = ()=>{

    const [Progress,setProgress] = useState(0)
    const [Email,setEmail] = useState(false)
    const [PlayerResponse,setPlayerResponse] = useState(false)
    const [Selected, setSelected] = useState(false)

    const Sections=[
       
        {
            Comp:<ChangeMyDetailsLanding setProgress={setProgress} setPlayerResponse={setPlayerResponse} StoreEmail={setEmail}/>
        },{
            Comp:<ChangeMyDetailsSelectPlayer  setProgress={setProgress} Email={Email} PlayerResponse={PlayerResponse} setSelected={setSelected}/>
        },{
            Comp:<ChangeMyDetailsForm  setProgress={setProgress} Selected={Selected} setSelected={setSelected}/>
        },{
            Comp:<ChangeMyDetailsSubmitted  setProgress={setProgress} Selected={Selected}/>
        },{
            Comp:<ChangeMyDetailsERROR  setProgress={setProgress} PlayerResponse={PlayerResponse}/>
        }
    ]

        return(
            <div className={StructureStyles.Outer}>
                <PageHeaderSmall 
                  HeaderCopy={`Change My Details`}  
                  SubCopy={``} 
                  BGIMG={`/images/BGIMG/RegoBG.jpg`}
                />
                <ContentContainer>
                    <div className={`${StructureStyles.Width70}`} >
                        {Sections[Progress].Comp}
                    </div>
                    <div className={`${StructureStyles.Width30}`} >
                        <SupportingSideNav />
                    </div>
                    </ContentContainer> 
                    <SupportersIcons />
              </div>
        ) 
}

export default ChangeMyDetails
import { useEffect, useState } from "react";
import { API } from "../config/index"
import ReactMarkdown from 'react-markdown';
import StructureStyles from "../styles/Structure/Structure.module.css";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall"
import ContentContainer from "../components/Structure/ContentContainer"
import SupportersIcons from "../components/Structure/SupportersIcons"
// Type
import { P,H2, H3, H4, H1 } from "../components/type";
import SupportingSideNav from "../components/Structure/SupportingSideNav"
import {RegIndividualTerms} from '../components/buttons'
import CreateNewPlayerForm from '../components/RegisterIndividual/CreateNewPlayer'
import FormElementGroup from "../components/FormElements/FormElementGroup"
import Create_Mycricket_ID from "../components/FormElements/PlayerMyCricketID";
import {FindPlayerDetails} from "../actions/Registration/handlePlayerRoster"
import PageLoader from "../components/Structure/PageLoader";
const RegisterIndividual = ({individual})=>{

    const [AgreedTerms, setAgreedTerms] = useState(false)
    const [MyCricketID, setMyCricketID] = useState(false)   
  return(
    <div className={StructureStyles.Outer}>
        <PageHeaderSmall 
          HeaderCopy={individual.Name}  
          SubCopy={`Sydney Junior Winter Cricket Association`} 
          BGIMG={`/images/BGIMG/RegoBG.jpg`}
        />

            <ContentContainer> 
            {
              AgreedTerms ? <PlayerIDCheck individual={individual} setAgreedTerms={setAgreedTerms} setMyCricketID={setMyCricketID} MyCricketID={MyCricketID}/>:
                  <RegisterIndividualInstructions individual={individual} setAgreedTerms={setAgreedTerms} setMyCricketID={setMyCricketID} MyCricketID={MyCricketID}/>
            }
                
                
                <div className={`${StructureStyles.Width30}`} >
                  <SupportingSideNav />
                </div>
              </ContentContainer> 
              <SupportersIcons />
      </div>
           
) 
}

export default RegisterIndividual

export const getStaticProps = async (context) => {
  const individualRes = await fetch(`${API}register-individual`)
  const individual = await individualRes.json()
return {  props: {individual} }
}



const RegisterIndividualInstructions = (props)=>{
  const {individual, setAgreedTerms,setMyCricketID, MyCricketID} = props;
  const [btn,setbtn] = useState(true)

  useEffect(()=>{
    if(MyCricketID){setbtn(false)}
  },[MyCricketID])
  return(
    <div className={`${StructureStyles.Width70} ${StructureStyles.ReactMarkdown}`} >
                  <H2>{individual.Name} {MyCricketID}</H2>
                  { <ReactMarkdown>{individual.Description}</ReactMarkdown> }
                  <FormElementGroup>
                    <H4>Enter MyCricket ID</H4>  
                      <Create_Mycricket_ID  setMyCricketID={setMyCricketID} MyCricketID={MyCricketID} />
                      <RegIndividualTerms SetState={setAgreedTerms} state={true} Title='Begin Registration' isDisabled={btn}/>
                    </FormElementGroup>
                </div>
  )
}



const RegisterIndividualForm = (props)=>{
  const {setAgreedTerms,setMyCricketID, MyCricketID} = props

  const ResetForm=()=>{
    setAgreedTerms(false)
    setMyCricketID(false)
  }

  return(
    <div className={`${StructureStyles.Width70}`} >
        <CreateNewPlayerForm MyCricketID={MyCricketID}/> 
        <RegIndividualTerms SetState={ResetForm} state={false} Title='Back' /> 
    </div> 
  )
} 


const PlayerAlreadyExists = (props)=>{
  console.log(props);
  const ResetForm=()=>{
    props.setAgreedTerms(false)
    props.setMyCricketID(false)
  }
  return(
    <div className={`${StructureStyles.Width70}`} >
      <FormElementGroup>
        <P> Player : {props.isNew.Name} Already Exists within the SJWCA Family.</P>
       <P>Next Steps:</P>
        </FormElementGroup> 
        <RegIndividualTerms SetState={ResetForm} state={false} Title='Back' />
      </div>
  )
}

const PlayerIDCheck = (props)=>{

  const[isNew,setisNew] =  useState(null)
  const CALLBACK=(DATA)=>{setisNew(DATA[0])}

 

  if(isNew === null){
    const OBJ={
      _MYCRICKETID:props.MyCricketID,
      _CALLBACK:CALLBACK
    }
    FindPlayerDetails(OBJ)
  }
  
  if(isNew === null)
  return(
    <div>
      <H1>SJWCA: Player check for ID {props.MyCricketID}</H1>
      <PageLoader />
    </div>
  )
 
  return( 
    <>
      {
        isNew.id ? <PlayerAlreadyExists {...props} isNew={isNew}/>:<RegisterIndividualForm {...props} isNew={isNew}/>
      }
    </>
  )
} 
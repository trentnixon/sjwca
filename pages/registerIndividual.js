import { useEffect, useState } from "react";
import Link from 'next/link'
import { API } from "../config/index"
import MarkdownContainer from '../components/Structure/MarkdownContainer'
import StructureStyles from "../styles/Structure/Structure.module.css";
import Buttonsstyles from "../styles/Structure/Buttons.module.css";
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
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
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
  const [RegOption, setRegOption] = useState(0)


  const BTNGRP=[
    {
      Label:'I have a Team',
      Copy:'HaveTeamAndMyCricketID',
      Form:'None'
    },{
      Label:'I am looking for a Team',
      Copy:'NoTeamButHasMyCricketID',
      Form:'None'
    },{
      Label:'I am a New Player',
      Copy:'NoTeamNoMyCricketID',
      Form:'None'
    },
  ]

    const SetNoID = ()=>{
      console.log('SetNoID')
      setMyCricketID('000000');
     
      return true
    }
  useEffect(()=>{
    if(MyCricketID){setbtn(false)}
  },[MyCricketID])
  return(
    <div className={`${StructureStyles.Width70}`} >
                  <H1>{individual.Name}</H1>
                  { <MarkdownContainer>{individual.Description}</MarkdownContainer> }

                  <div className={StructureStyles.VertSpacer}></div>
                  <FormElementGroup>
                    <P><strong>Select the option that best fits your situation</strong></P>
                  <ButtonGroup variant="contained" aria-label="outlined primary button group">
                  {
                    BTNGRP.map((OPT,i)=>{
                        return(
                          <Button className={RegOption ===i  ? Buttonsstyles['Next']:Buttonsstyles['Clear']} key={i} 
                          onClick={()=>{setRegOption(i); setMyCricketID(false); setbtn(true)}} >{OPT.Label}</Button>
                        )
                    })
                  }
                  </ButtonGroup>
                  <div className={StructureStyles.VertSpacer}></div>
                  </FormElementGroup>

                  <RegistrationInformationOption  Option={BTNGRP[RegOption]} individual={individual}/>
                 
                  <FormElementGroup>
                    {
                      RegOption == 2 ? SetNoID() : <Create_Mycricket_ID  setMyCricketID={setMyCricketID} MyCricketID={MyCricketID} />
                    }
                   
                      <RegIndividualTerms SetState={setAgreedTerms} state={true} Title='Begin Registration' isDisabled={btn}/>
                    </FormElementGroup>
                    <P><em>This form is for parents of players ONLY.</em></P>
                    <P> Team Managers wishing to register a Team for the upcoming season please use our <Link href='/registerTeam' >Team Registration Page</Link>.</P>
                </div>
  )
}
//   <Create_Mycricket_ID  setMyCricketID={setMyCricketID} MyCricketID={MyCricketID} />


const RegistrationInformationOption = ({Option,individual})=>{
  //console.log(Option)
  return(
    <div>{ <MarkdownContainer>{individual[Option['Copy']]}</MarkdownContainer> }</div>
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
  //console.log(props);
  const ResetForm=()=>{ 
    props.setAgreedTerms(false)
    props.setMyCricketID(false)
  }
  return(
    <div className={`${StructureStyles.Width70}`} >
      <FormElementGroup>
        <P> Player : {props.isNew.Name} Already Exists within the SJWCA Family.</P>
        </FormElementGroup> 
        <RegIndividualTerms SetState={ResetForm} state={false} Title='Back' />
      </div>
  )
}

const PlayerIDCheck = (props)=>{

  const[isNew,setisNew] =  useState(null)
  const CALLBACK=(DATA)=>{setisNew(DATA[0])}

 


  if(isNew === null){
    
    if(props.MyCricketID === '000000'){
      setisNew({id: false})
      return true
    }
    const OBJ={
      _MYCRICKETID:props.MyCricketID,
      _CALLBACK:CALLBACK
    }
    FindPlayerDetails(OBJ)
  }
  
  if(isNew === null)
  return(
    <div>
      <H2>SJWCA: Player check.</H2>
      <H2>ID {props.MyCricketID}</H2>
      <PageLoader />
    </div>
  )
 
  //console.log(props.MyCricketID, isNew)

  return( 
    <>
      {
        isNew.id ? <PlayerAlreadyExists {...props} isNew={isNew}/>:<RegisterIndividualForm {...props} isNew={isNew}/>
      }
    </>
  )
} 
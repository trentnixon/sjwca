import { useEffect, useState } from "react";
import Link from "next/link";
import { API } from "../config/index";
import { track_ga_event } from "../actions/GA";
import MarkdownContainer from "../components/Structure/MarkdownContainer";
import StructureStyles from "../styles/Structure/Structure.module.css";
import Buttonsstyles from "../styles/Structure/Buttons.module.css";
import { Table, Button } from "@mantine/core";
import { IconUsers } from "@tabler/icons";
// Components
import PageHeaderSmall from "../components/Structure/PageHeaderSmall";
import ContentContainer from "../components/Structure/ContentContainer";
import SupportersIcons from "../components/Structure/SupportersIcons";
// Type
import { P, H2, H3, H4, H1 } from "../components/type";
import SupportingSideNav from "../components/Structure/SupportingSideNav";
import { RegIndividualTerms } from "../components/buttons";
import CreateNewPlayerForm from "../components/RegisterIndividual/CreateNewPlayer";
import FormElementGroup from "../components/FormElements/FormElementGroup";
import Create_Mycricket_ID from "../components/FormElements/PlayerMyCricketID";
import { FindPlayerDetails } from "../actions/Registration/handlePlayerRoster";
import PageLoader from "../components/Structure/PageLoader";

const RegisterIndividual = ({ individual, RegionToAge }) => {
  console.log(RegionToAge);

  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={individual.Name}
        SubCopy={`Sydney Junior Winter Cricket Association`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H1>{individual.Name}</H1>
          {<MarkdownContainer>{individual.Description}</MarkdownContainer>}
          {/*  <BasicTable RegionToAge={RegionToAge} /> */}
          <div className={StructureStyles.VertSpacer}></div>
          {/* <P>
            <em>Player Registration details will be made available shortly</em>
          </P> */}
          <P>
            <em>Are you still looking for a team this Winter?</em>
          </P>
          <P>
            Most regions still have some availability. We're working hard to
            pull together some extra sides.
          </P>{" "}
          <P>
            If you are still looking for a team please email
            <a href="mailto:sjwca@sydneyjuniorwintercricket.org.au">
              sjwca@sydneyjuniorwintercricket.org.au
            </a>{" "}
            with the following details: Name, DOB, Suburb </P> 
            <P>If you have any friends
            looking to join with you, please let us know on that front too.
          </P>
          <P>
            {" "}
            Team Managers wishing to register a Team for the upcoming season
            please use our{" "}
            <Link href="/registerTeam">Team Registration Page</Link>.
          </P>
        </div>

        <div className={`${StructureStyles.Width30}`}>
          <SupportingSideNav />
        </div>
      </ContentContainer>
      <SupportersIcons />
    </div>
  );
};

export default RegisterIndividual;

export const getServerSideProps = async (context) => {
  const individualRes = await fetch(`${API}register-individual`);
  const individual = await individualRes.json();
  const RegionToAgeRes = await fetch(`${API}region-to-agegroups`);
  const RegionToAge = await RegionToAgeRes.json();
  return { props: { individual, RegionToAge } };
};

/* export async function getServerSideProps(context) {
  const registerteamRes = await fetch(`${API}register-team-landing`);
  const switchboardRes = await fetch(`${API}switchboard`);
  const resRego = await fetch(`${API}registration-insructions`);
  const RegionToAgeRes = await fetch(`${API}region-to-agegroups`);
  const RegistrationInsructions = await resRego.json();
  const registerteam = await registerteamRes.json();
  const switchboard = await switchboardRes.json();

  const RegionToAge = await RegionToAgeRes.json();

  return {
    props: { switchboard, registerteam, RegistrationInsructions, RegionToAge },
  };
} */

/*
{
              AgreedTerms ? <PlayerIDCheck individual={individual} setAgreedTerms={setAgreedTerms} setMyCricketID={setMyCricketID} MyCricketID={MyCricketID}/>:
                  <RegisterIndividualInstructions individual={individual} setAgreedTerms={setAgreedTerms} setMyCricketID={setMyCricketID} MyCricketID={MyCricketID}/>
            }
*/

function BasicTable({ RegionToAge }) {
  console.log(RegionToAge);
  function groupByIdentifier(array) {
    const grouped = {};
    array.forEach((item) => {
      const identifier = item?.region?.Name;
      if (!grouped[identifier]) {
        grouped[identifier] = [];
      }
      grouped[identifier].push(item);
    });
    return grouped;
  }

  const grouped = groupByIdentifier(RegionToAge);
  console.log(grouped);
  return (
    <>
      {Object.keys(groupByIdentifier(RegionToAge)).map((key, i) => {
        return (
          <div key={i}>
            <H3>{key}</H3>
            <Table verticalSpacing="sm">
              <thead>
                <tr>
                  <th>League</th>
                  <th>Age</th>
                  <th>Division</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {groupByIdentifier(RegionToAge)[key].map((row, ii) => {
                  if (row.PlayHQPlayerRegoLink)
                    return (
                      <tr key={ii}>
                        <td>{row?.region?.Name}</td>
                        <td>{row?.age_group.Name}</td>
                        <td> {row?.division.Name}</td>
                        <td>
                          <Button
                            variant="outline"
                            color="orange"
                            uppercase
                            href={row.PlayHQPlayerRegoLink}
                            component="a"
                            target="_blank"
                            rel="noopener noreferrer"
                            rightIcon={<IconUsers size={14} />}
                            styles={(theme) => ({
                              root: {
                                paddingLeft: 20,
                                paddingRight: 20,

                                "&:hover": {
                                  backgroundColor: "#fd7e14",
                                  color: "white",
                                },
                              },

                              leftIcon: {
                                marginRight: 15,
                              },
                            })}
                          >
                            Register
                          </Button>
                        </td>
                      </tr>
                    );
                })}
              </tbody>
            </Table>
          </div>
        );
      })}
    </>
  );
}

/* 



const RegisterIndividualInstructions = (props)=>{

  const {individual, setAgreedTerms,setMyCricketID, MyCricketID} = props;
  const [btn,setbtn] = useState(true)
  const [RegOption, setRegOption] = useState(0)

  const GA = (i) => {
    track_ga_event({
      action: "Individual_Registration_Team_Options",
      params : {  Option_Selected: BTNGRP[i].Label }
    })
  }

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
      //console.log('SetNoID')
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
                          onClick={()=>{setRegOption(i); GA(i); setMyCricketID(false); setbtn(true)}} >{OPT.Label}</Button>
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


  useEffect(()=>{
    track_ga_event({
      action: "RegisterIndividualForm",
      params : {  Started: 'true'}
    }) 
  },[])


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
  useEffect(()=>{
    track_ga_event({
      action: "MyCricketIDSet",
      params : {  MyCricketIDSet: 'true'}
    }) 
  },[])

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
}   */

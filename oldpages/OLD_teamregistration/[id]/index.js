import { useRouter } from "next/router";
import { API } from "../../../config/index";
import fetch from "node-fetch";
import StructureStyles from "../../../styles/Structure/Structure.module.css";
import PageHeaderSmall from "../../../components/Structure/PageHeaderSmall";
import ContentContainer from "../../../components/Structure/ContentContainer";
import DataLoadingPlaceHolder from "../../../components/Structure/DataLoadingPlaceHolder";
// Form
import TeamRegistrationForm from "../../../components/RegisterATeam/TeamRegistrationForm";
import { useEffect, useState } from "react";

const TeamRegistration = ({ Team, RegistrationInsructions, switchboard }) => {
  // In your component body
  const router = useRouter();
  const [CurrentSeasonID, setCurrentSeasonID] = useState(
    switchboard.season?.id
  );

  const [SelectedTeam, setSelectedTeam] = useState(Team);
  // call this method whenever you want to refresh server-side props
  const refreshData = () => {
    router.replace(router.asPath);
    setSelectedTeam([]);
  };

  useEffect(() => {
    setSelectedTeam(Team);
  }, [Team]);
  //623532653244

  if (SelectedTeam.length === 0) {
    return <DataLoadingPlaceHolder Copy={`Gathering Details`} />;
  }
  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={`Team Registration`}
        SubCopy={`SJWCA 2025`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />
      <ContentContainer>
        <TeamRegistrationForm
          SelectedTeam={SelectedTeam}
          AmendAgeGroup={router.query.AmendAgeGroup}
          refreshData={refreshData}
          CurrentSeasonID={CurrentSeasonID}
          Insructions={RegistrationInsructions.Insructions}
        />
      </ContentContainer>
    </div>
  );
};
export default TeamRegistration;

export const getServerSideProps = async (ctx) => {
  const res = await fetch(`${API}teams/${ctx.params.id}`);
  const resRego = await fetch(`${API}registration-insructions`);
  const switchboardRes = await fetch(`${API}switchboard`);

  const Team = await res.json();
  const RegistrationInsructions = await resRego.json();
  const switchboard = await switchboardRes.json();

  return {
    props: {
      Team: Team,
      Completed: false,
      RegistrationInsructions: RegistrationInsructions,
      switchboard: switchboard,
    },
  };
};

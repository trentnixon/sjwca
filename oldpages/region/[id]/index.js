import RegionStyles from "../../../styles/Regions.module.css";

import { API } from "../../../config/index";
import { track_ga_event } from "../../../actions/GA";
import Link from "next/link";

import MarkdownContainer from "../../../components/Structure/MarkdownContainer";
import fetch from "node-fetch";
import { GoogleMap, Marker } from "@react-google-maps/api";

import StructureStyles from "../../../styles/Structure/Structure.module.css";
import PageHeaderSmall from "../../../components/Structure/PageHeaderSmall";
import ContentContainer from "../../../components/Structure/ContentContainer";
import FullWidthContainer from "../../../components/Structure/FullWidthContainer";
import { H1 } from "../../../components/type";

import LocationOnIcon from "@mui/icons-material/LocationOn";
import { Regions } from "../../../data/regions";

const SingleRegion = ({ regionName }) => {
  const useRegion = Object.values(Regions).find(
    (region) => region.Name === regionName
  );
  console.log(useRegion.Grounds);

  //const [useRegion, setuseRegion] = useState(region.region)

  /* const GA = (Name) => {
    track_ga_event({
      action: "Btn_View_Ground",
      params: { Ground_Selected: Name },
    });
  }; */
  /*  const containerStyle = {
    width: "100%",
    height: "600px",
  };

  const center = {
    lat: parseFloat(useRegion.Lat),
    lng: parseFloat(useRegion.Long),
  }; */

  /*  const svgMarker = {
    path: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
    fillColor:"#EA008A",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 1.5,
    anchor: new google.maps.Point(15, 30),
  }; */

  /*  const GroundMarker = {
    path: "M15.05 12.81 6.56 4.32a.9959.9959 0 0 0-1.41 0L2.32 7.15c-.39.39-.39 1.02 0 1.41l8.49 8.49c.39.39 1.02.39 1.41 0l2.83-2.83c.39-.39.39-1.02 0-1.41zm-.7088 4.9462 1.4142-1.4142 4.2426 4.2426-1.4142 1.4142z",
    fillColor:"#EA008A",
    fillOpacity: 1,
    strokeWeight: 0,
    rotation: 0,
    scale: 2,
    anchor: new google.maps.Point(15, 30),
  };

  const Markers = () => {
    let Markers = [];
    useRegion.Grounds.map((region, i) => {
      Markers.push(
        <Marker
          icon={GroundMarker}
          position={{
            lat: parseFloat(region.Lat),
            lng: parseFloat(region.Long),
          }}
        />
      );
    });

    return Markers;
  }; */

  return (
    <div className={StructureStyles.Outer}>
      <PageHeaderSmall
        HeaderCopy={useRegion.Name}
        SubCopy={`Region`}
        BGIMG={`/images/BGIMG/RegoBG.jpg`}
      />

      <ContentContainer>
        <div className={`${StructureStyles.Width70}`}>
          <H1>{useRegion.Name}</H1>
          {<MarkdownContainer>{useRegion.About}</MarkdownContainer>}
        </div>
        <div className={`${StructureStyles.Width30}`}>
          <ul className={RegionStyles.List_col}>
            {useRegion.Grounds.map((grounds, i) => {
              return (
                <li>
                  <Link href={`/ground/${encodeURI(grounds.Name)}`}>
                    <a>
                      <LocationOnIcon />
                      {grounds.Name}
                    </a>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </ContentContainer>

      <FullWidthContainer>
        {/* <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={11}>
          {Markers()}
        </GoogleMap> */}
      </FullWidthContainer>
    </div>
  );
};
export default SingleRegion;

export const getServerSideProps = async (ctx) => {
  const regionName = decodeURIComponent(ctx.params.id);
  console.log(regionName);

  const res = await fetch(`${API}regions/${ctx.params.id}`);
  const regionRes = await res.json();
  return { props: { regionRes, regionName } };
};

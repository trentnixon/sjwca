import { Links } from "./RegistrationLinks";
import { Regions } from "./regions";

export const Conferences = {
  Sixers: {
    color:"#ea008a",
    Conference: "SIXERS",
    About: `In 2024 we will be offering U10s, U12s, U14s and U16s in the Sixers 
    Conference. There will be six teams per grade. There will be 7 regular round matches.
     Following the regular season the top 4 sides will play Semi Finals before the 
     Final and 3rd Place Play off. 5th and 6th will play two friendlies to finish off 
     the season. 
     There will be 7 matches in total for all teams. Locations for the Sixers Conference
      in 2024 include Northern Beaches, Northern Suburbs, Eastern Suburbs.`,
    CTA: Links,
    regions: [
      Regions.InnerWestCanterburyBankstown,
      Regions.EasternSuburbs,
      Regions.NorthernSuburbs,
    ],
    // This will be populated with region data in a later step
  },
  Thunder: {
    color:"#96d701",
    Conference: "THUNDER",
    CTA: Links,
    About: `In 2024 we will be offering U10s, U12s, U14s and U16s in the Thunder 
    Conference. There will be eight teams per grade. There will be 7 regular 
    round matches. Following the regular season all 8 sides will play a straight 
    final (1st v 2nd, 3rd v 4th etc). There will be 8 matches in total for all teams. 
    Locations for the Thunder Conference in 2024 include North-West Sydney, Parramatta, 
    Far-West and South-West Sydney.`,
    regions: [
      Regions.SouthWestSydney,
      //Regions.Parramatta,
      Regions.WesternSydneyRegion,
    ],
  },
};
 
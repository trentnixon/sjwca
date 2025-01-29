import { Links } from "./RegistrationLinks";
import { Regions } from "./regions";

export const Conferences = {
  Sixers: {
    color: "#ea008a",
    Conference: "SIXERS",
    About: `In 2025 we will be offering U10s, U12s, U14s and U16s in the Sixers Conference`,
    CTA: Links,
    regions: [
      Regions.InnerWestCanterburyBankstown,
      Regions.EasternSuburbs,
      Regions.CentralCoast,
    ],
    // This will be populated with region data in a later step
  },
  Thunder: {
    color: "#96d701",
    Conference: "THUNDER",
    CTA: Links,
    About: `In 2025 we will be offering U10s, U12s, U14s and U16s in the Thunder Conference.`,
    regions: [
      Regions.SouthWestSydney,
      //Regions.Parramatta,
      Regions.WesternSydneyRegion,
    ],
  },
};

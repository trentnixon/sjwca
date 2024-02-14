import { Grounds } from "./Grounds";
import { Links } from "./RegistrationLinks";
import { AgeGroups } from "./ageGroups";

export const Regions = {
  InnerWestCanterburyBankstown: {
    CTA: {
      EOI: Links.EOF,
      TeamRegistration: Links.RegisterTeam.InnerWestCanterburyBankstown,
    },
    Name: "Inner West & Canterbury-Bankstown",
    Lat: "-33.94496897813303",
    Long: "151.05030134024435",
    Blurb:
      "The Inner West & Canterbury-Bankstown junior winter cricket competition, a proud segment of the Sixers Conference, invites participation across the U12s, U14s, and U16s age groups for the 2024 season. With games hosted at key venues such as Vale of AH Reserve, Gazzard Park, Johnstone Res, Terry Lamb Complex, and Padstow Park, it's an ideal setting for young cricketers to showcase their skills. Given the high demand in this region, securing a spot early is highly recommended to ensure participation in this celebrated cricket competition.",
    Grounds: [
      Grounds.ValeOfAHReserve,
      Grounds.GazzardPark,
      Grounds.JohnstoneRes,
      Grounds.TerryLambComplex,
      Grounds.PadstowPark,
    ],
    AgeGroups: [AgeGroups.U12, AgeGroups.U14, AgeGroups.U16],
  },
  EasternSuburbs: {
    CTA: {
      EOI: Links.EOF,
      TeamRegistration: Links.RegisterTeam.EasternSuburbs,
    },
    Name: "East & Northern Sydney",
    Lat: "-33.89892327484967",
    Long: "151.2204588931487",
    Blurb:
      "The Eastern Suburbs junior winter cricket competition, aligning with the Sixers Conference, opens its doors to young cricketers for the 2024 season across U10, U12, U14, and U16 age groups. This year, all matches will unfold at the iconic Moore Park/Centennial Parklands, offering a scenic backdrop for the games. While this region might not see the rush of other areas, it remains a fantastic opportunity for participants to engage in competitive cricket, develop their skills, and enjoy the spirit of the game in a less crowded setting. Registrations are open, and we welcome all young cricketers to join in the Eastern Suburbs competition.",
    Grounds: [
      Grounds.MoorePark,
      Grounds.KaruahPark,
      Grounds.ForsythPark,
      Grounds.PassmoreRes,
    ],
    AgeGroups: [AgeGroups.U10, AgeGroups.U12, AgeGroups.U14, AgeGroups.U16],
  },
  /*   NorthernSuburbs: {
    CTA: {
      EOI: Links.EOF,
      TeamRegistration: Links.RegisterTeam.NorthernSuburbs,
    },
    Name: "Northern Suburbs",
    Lat: "-33.726791165130024",
    Long: "151.13174685877726",
    Blurb:
      "The Northern Suburbs junior winter cricket competition, a key part of the Sixers Conference, is gearing up for its 2024 season, exclusively offering competition for the U12 age group. Hosted at Karuah Park, this smaller, focused competition provides a perfect platform for U12 players to hone their cricket skills, engage in healthy competition, and experience the camaraderie of the sport. With its more intimate setting, the Northern Suburbs competition offers a unique opportunity for young cricketers to shine. While it's a smaller comp, the impact on player development and enjoyment is significant. Players and families interested in participating are encouraged to get involved and be part of this special cricketing experience.",
    Grounds: [Grounds.KaruahPark],
    AgeGroups: [AgeGroups.U12],
  }, */
  SouthWestSydney: {
    CTA: {
      EOI: Links.EOF,
      TeamRegistration: Links.RegisterTeam.SouthWestSydney,
    },
    Name: "South West Sydney",
    Lat: "-33.954754465471645",
    Long: "150.89874801765205",
    Blurb:
      "In 2024, South-West Sydney, a key player in the Thunder Conference, is set to host competitions across four celebrated grounds: Blinman Oval, Hammondville Oval, Kokoda Oval, and Paciullo Park. Catering to a wide range of young talent, the region offers divisions for U10s, U12s, U14s, and U16s, fostering a vibrant sporting community where athleticism and teamwork take center stage.",
    Grounds: [
      Grounds.BlinmanOval,
      Grounds.HammondvilleOval,
      Grounds.KokodaOval,
      Grounds.PaciulloPark,
    ],
    AgeGroups: [AgeGroups.U10, AgeGroups.U12, AgeGroups.U14, AgeGroups.U16],
  },
  Parramatta: {
    CTA: {
      EOI: Links.EOF,
      TeamRegistration: Links.RegisterTeam.Parramatta,
    },
    Name: "Parramatta",
    Lat: "-33.87180802690706",
    Long: "150.95620305557665",
    Blurb:
      "In 2024, Parramatta will shine as a vital component of the Thunder Conference, presenting competitive opportunities at Schell Park and Guildford Park for the U12s category. This initiative underscores Parramatta's dedication to nurturing young athletes and enriching the community through sport, setting the stage for a season where talent, passion, and teamwork converge.",
    Grounds: [Grounds.SchellPark, Grounds.GuildfordPark],
    AgeGroups: [AgeGroups.U12],
  },
  WesternSydneyRegion: {
    CTA: {
      EOI: Links.EOF,
      TeamRegistration: Links.RegisterTeam.WesternSydneyRegion,
    },
    Name: "Western Sydney Region",
    Lat: "-33.75225948068404",
    Long: "150.91464055190852",
    Blurb:
      "The Western Sydney Region's junior winter cricket competition in 2024, part of the Thunder Conference, is poised for another dynamic season with age groups spanning U10s, U12s, U14s, and U16s. Matches are scheduled across our esteemed grounds, including Rupertswood Park, Lang Park, Smith Park, and several others, promising a rich competitive experience. Given its popularity, participants are encouraged to register early to secure their spot in one of our most sought-after regions.",
    Grounds: [
      Grounds.RupertswoodPark,
      Grounds.LangPark,
      Grounds.SmithPark,
      Grounds.MillStPark,
      Grounds.GoldenGrovePark,
      Grounds.VineyardOval,
      Grounds.BurtonStOval,
      Grounds.SalesPark,
      Grounds.MonfarvilleReserve,
      Grounds.TallawongOval,
      Grounds.WoodcroftOval,
    ],
    AgeGroups: [AgeGroups.U10, AgeGroups.U12, AgeGroups.U14, AgeGroups.U16],
  },
  CentralCoast: {
    CTA: {
      EOI: Links.EOF,
      TeamRegistration: Links.RegisterTeam.CentralCoast,
    },
    Name: "Central Coast",
    Lat: "-33.20248649693076",
    Long: "151.47048499693977",
    Blurb: "",
    Grounds: [Grounds.TBC],
    AgeGroups: [AgeGroups.U12, AgeGroups.U14],
  },
};

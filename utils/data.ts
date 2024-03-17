import image1 from "../src/images/10000_clear_large@2x.png";
import image2 from "../src/images/11000_mostly_clear_large@2x.png";
import image3 from "../src/images/11010_partly_cloudy_large@2x.png";
import image4 from "../src/images/11020_mostly_cloudy_large@2x.png";
import image5 from "../src/images/20000_fog_large@2x.png";
import image6 from "../src/images/21000_fog_light_large@2x.png";
import image7 from "../src/images/40000_drizzle_large@2x.png";
import image8 from "../src/images/40010_rain_large@2x.png";
import image9 from "../src/images/42000_rain_light_large@2x.png";
import image10 from "../src/images/42010_rain_heavy_large@2x.png";
import image11 from "../src/images/50000_snow_large@2x.png";
import image12 from "../src/images/50010_flurries_large@2x.png";
import image13 from "../src/images/51000_snow_light_large@2x.png";
import image14 from "../src/images/51010_snow_heavy_large@2x.png";
import image15 from "../src/images/60000_freezing_rain_drizzle_large@2x.png";
import image16 from "../src/images/60010_freezing_rain_large@2x.png";
import image17 from "../src/images/62000_freezing_rain_light_large@2x.png";
import image18 from "../src/images/62010_freezing_rain_heavy_large@2x.png";
import image19 from "../src/images/70000_ice_pellets_large@2x.png";
import image20 from "../src/images/71010_ice_pellets_heavy_large@2x.png";
import image21 from "../src/images/71020_ice_pellets_light_large@2x.png";
import image22 from "../src/images/71020_ice_pellets_light_large@2x.png";
import image23 from "../src/images/80000_tstorm_large@2x.png";

export const weathercode = {
  "0": "Unknown",
  "1000": ["Clear", image1],
  "1100": ["Mostly Clear", image2],
  "1101": ["Partly Cloudy", image3],
  "1102": ["Mostly Cloudy", image4],
  "1001": ["Cloudy", image5],
  "2000": ["Fog", image6],
  "2100": ["Light Fog", image7],
  "4000": ["Drizzle", image8],
  "4001": ["Rain", image9],
  "4200": ["Light Rain", image10],
  "4201": ["Heavy Rain", image11],
  "5000": ["Snow", image12],
  "5001": ["Flurries", image13],
  "5100": ["Light Snow", image14],
  "5101": ["Heavy Snow", image15],
  "6000": ["Freezing Drizzle", image16],
  "6001": ["Freezing Rain", image17],
  "6200": ["Light Freezing Rain", image18],
  "6201": ["Heavy Freezing Rain", image19],
  "7000": ["Ice Pellets", image20],
  "7101": ["Heavy Ice Pellets", image21],
  "7102": ["Light Ice Pellets", image22],
  "8000": ["Thunderstorm", image23],
};

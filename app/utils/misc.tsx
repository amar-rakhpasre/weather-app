import { Description } from "@radix-ui/react-dialog";
import moment from "moment";

export const kelvinToCelsius = (kelvin: number) =>{
    return Math.round(kelvin - 273.15);
}

// Define the type for the air quality index item
// interface AirQualityIndex {
//     rating: number;
//     Description: string;
//   } : AirQualityIndex[]

export const airQualityIndexText = [
    {
        rating: 20,
        Description: "good"
    },
    {
        rating: 40,
        Description: "fair"
    },
    {
        rating: 60,
        Description: "moderate"
    },
    {
        rating: 80,
        Description: "poor"
    },
    {
        rating: 100,
        Description: "very poor"
    },
];


export const unixToTime = (unix: number, timezone: number) => {
    return moment.unix(unix).utcOffset(timezone / 60).format("h:mm A");
  }
  


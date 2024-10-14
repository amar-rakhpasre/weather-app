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
        rating: 10,
        description: "excellent"
    },
    {
        rating: 20,
        description: "good"
    },
    {
        rating: 30,
        description: "moderate"
    },
    {
        rating: 40,
        description: "poor"
    },
    {
        rating: 50,
        description: "unhealthy for sensitive groups"
    },
    {
        rating: 60,
        description: "unhealthy"
    },
    {
        rating: 70,
        description: "very unhealthy"
    },
    {
        rating: 80,
        description: "extremely unhealthy"
    },
    {
        rating: 90,
        description: "hazardous"
    },
    {
        rating: 100,
        description: "critical"
    }
];

export const formatNumber = (num: number) => {
    if (num >= 1000000) {
        return (num / 1000000).toFixed(1) + "M";
    } else if (num >= 1000) {
        return (num / 1000).toFixed(1) + "K";
    } else {
        return num;
    }
};



export const unixToTime = (unix: number, timezone: number) => {
    return moment.unix(unix).utcOffset(timezone / 60).format("h:mm A");
  }

  export const unixToDay = (unix: number) => {
    return moment.unix(unix).format("ddd");
  };
  


import { Description } from "@radix-ui/react-dialog";

export const kelvinToCelsius = (kelvin: number) =>{
    return Math.round(kelvin - 273.15);
}

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
]
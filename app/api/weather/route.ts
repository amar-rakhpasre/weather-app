import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const apiKey = process.env.OPENWEATHERMAP_API_KEY
        const lat = 19.0364;  // Decimal format for latitude
        const lon = 72.8595;  // Decimal format for longitude
        const url =  `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        
        const res = await axios.get(url);

        return NextResponse.json(res.data);

    } catch (error) {
        console.log("Error fetching forecast data");

        return new Response("Error fetching forecast data", {status: 500});
        
    }
    
}
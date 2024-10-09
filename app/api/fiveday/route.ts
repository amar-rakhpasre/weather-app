import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        const apiKey = process.env.OPENWEATHERMAP_API_KEY as string;

        // Check if apiKey exists, otherwise throw an error
        if (!apiKey) {
            console.log("API key is missing.");
        }

        const lat = 19.0364;  // Decimal format for latitude
        const lon = 72.8595;  // Decimal format for longitude
        const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}`;
        
        const dailyRes = await fetch(url, {
            next: { revalidate: 3600 },
        });

        const dailyData = await dailyRes.json();
        console.log(dailyData)
        return NextResponse.json(dailyData);

        
    } catch (error) {
        console.log("Error fetching forecast data");

        return new Response("Error fetching forecast data", {status: 500});
        
    }
    
}
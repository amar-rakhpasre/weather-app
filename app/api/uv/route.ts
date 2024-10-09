import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
    try {
        // const apiKey = process.env.OPENWEATHERMAP_API_KEY as string;

        // // Check if apiKey exists, otherwise throw an error
        // if (!apiKey) {
        //     console.log("API key is missing.");
        // }

        const lat = 19.0364;  // Decimal format for latitude
        const lon = 72.8595;  // Decimal format for longitude
        const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=52.52&longitude=13.41&current=uv_index,uv_index_clear_sky&hourly=uv_index,uv_index_clear_sky&forecast_days=1`;
        
        const res = await fetch(url, {
            next: { revalidate: 900 },
        });

        const uvData = await res.json();
        console.log(uvData)
        return NextResponse.json(uvData);
    
    } catch (error) {
        console.log("Error fetching UV data");

        return new Response("Error fetching UV data", {status: 500});
        
    }
    
}
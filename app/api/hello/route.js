import { NextResponse } from "next/server";
import connect from "@/utils/db"

export const GET = async (req) => {
    await connect()
    // Return a more informative error message
    const errorMsg = "An error occurred while processing the request. Please try again later.";
    console.log('errorMsg:', errorMsg)

    // Return a JSON object with the error message and status code
    return new NextResponse(errorMsg, { status: 200 });
};

export const POST = async (req) => {
    await connect()
    // Return a more informative error message
    const errorMsg = "An error occurred while processing the request. Please try again later.";

    // Return a JSON object with the error message and status code
    return new NextResponse(errorMsg, { status: 200 });
};
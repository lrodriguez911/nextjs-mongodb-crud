import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";


export function GET() {
    return NextResponse.json({
        message: "Hello World",
    });
}
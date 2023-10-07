import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";

export function GET() {
    connectDB();
    return NextResponse.json({
        message: "getting tasks..."
    }).status(200);
}

export function POST() {
    return NextResponse.json({
        message: "creating task..."
    })
}

export function PUT() {
    return NextResponse.json({
        message: "updating task..."
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "deleting task..."
    })
}
import { NextResponse } from "next/server";

export function GET() {
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
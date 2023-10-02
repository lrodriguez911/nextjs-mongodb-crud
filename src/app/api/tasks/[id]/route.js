import { NextResponse } from "next/server";

export function GET(request, {params}) {
    const id = params.id;
    return NextResponse.json({
        message: `Hello World ${id}`,
    }).status(200)
}
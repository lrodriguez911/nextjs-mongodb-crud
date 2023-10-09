import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import { Task } from "@/models/Task";

export async function GET() {
    connectDB();
    const tasks = await Task.find({});
    return NextResponse.json(tasks).status(200);
}

export async function POST(request) {
    try {
    const data = await request.json()
    const newTask = new Task(data);
    const saveTask = await newTask.save()
    return NextResponse.json({
        message: "creating task..."
    })
    } catch (error) {
        return NextResponse.json({
            error: error.message,
            status:400
    })
}
}

export function PUT(request) {
    try {
        
    } catch (error) {
        
    }
    return NextResponse.json({
        message: "updating task..."
    })
}

export function DELETE() {
    return NextResponse.json({
        message: "deleting task..."
    })
}
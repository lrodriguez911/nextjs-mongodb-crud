import { NextResponse } from "next/server";
import { connectDB } from "@/utils/mongoose";
import Task from "@/models/Task";

export async function GET(request, { params }) {
  try {
    const id = params.id;
    connectDB();
    const taskFound = await Task.findById(id);

    if (!taskFound)
      return NextResponse.json(
        {
          message: `Task not found ${id}`,
        },
        {
          status: 404,
        }
      );

    return NextResponse.json({
      message: `Hello World ${id}`,
    }).status(200);
  } catch (error) {
    return NextResponse.json({
      message: `Error ${error}`,
    }, {status: 400});
  }
}

export function DELETE(request, { params }) {
  const id = params.id;
  return NextResponse.json({
    message: `Deleting task ${id}`,
  });
}

export async function PUT(request, { params }) {
  try {
    const data = await request.json();
  const taskUpdate = await Task.findByIdAndUpdate(params.id, data, {
    new: true,
  });
  return NextResponse.json(taskUpdate);
  } catch (error) {
    return NextResponse.json(error.message, {
      status: 400
    })
  }
}

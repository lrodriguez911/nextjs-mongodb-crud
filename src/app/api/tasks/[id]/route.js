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

export function PUT(request, { params }) {
  const { id, name, description } = params;
  const task = find(id);
  task.name = name;
  task.description = description;
  return NextResponse.json({
    message: `Updating task ${id}`,
  });
}

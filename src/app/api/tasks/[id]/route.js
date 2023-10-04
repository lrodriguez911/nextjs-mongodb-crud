import { NextResponse } from "next/server";

export function GET(request, { params }) {
  const id = params.id;
  return NextResponse.json({
    message: `Hello World ${id}`,
  }).status(200);
}

export function DELETE(request, { params }) {
  const id = params.id;
  return NextResponse.json({
    message: `Deleting task ${id}`,
  });
}

export function PUT(request, { params }) {
  const {id, name, description } = params;
  const task = find(id);
    task.name = name;
    task.description = description;
  return NextResponse.json({
    message: `Updating task ${id}`,
  });
}

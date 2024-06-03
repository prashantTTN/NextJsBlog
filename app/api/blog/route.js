import connectMongoDB from "@/libs/mongodb";
import Blog from "@/models/blog";
import { NextResponse } from "next/server";

export async function POST(request) {
  const { title, content} = await request.json();
  console.log('in route.js===', title, content);
  await connectMongoDB();
  await Blog.create({ title, content});
  console.log('creating blog===', { title, content});
  return NextResponse.json({ message: "Blog Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const blogs = await Blog.find();
  // console.log('blogs===', blogs);
  return NextResponse.json({ blogs });
}

// export async function DELETE(request) {
//   const id = request.nextUrl.searchParams.get("id");
//   await connectMongoDB();
//   await Topic.findByIdAndDelete(id);
//   return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
// }
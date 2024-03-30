import { NextResponse } from "next/server";
import { getAllMovies } from "@/lib/data";

export async function GET() {
  const data = await getAllMovies();
  return NextResponse.json(data);
}

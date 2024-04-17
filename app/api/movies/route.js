import { NextResponse } from "next/server";
import { movieList } from "@/lib/data";

export async function GET() {
  const data = movieList.results;
  return NextResponse.json(data);
}

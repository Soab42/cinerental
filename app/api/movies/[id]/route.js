import { NextResponse } from "next/server";
import { getMoviesById } from "@/lib/data";

export async function GET(req, { params }) {
  const movieId = params?.id;
  const data = await getMoviesById(movieId);
  return NextResponse.json(data);
}

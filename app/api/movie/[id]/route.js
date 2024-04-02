import { NextResponse } from "next/server";
import { getMoviesById } from "@/lib/data";
import { movieList } from "@/lib/data";
export async function GET(req, { params }) {
  const movieId = params?.id;
  const data = getMoviesById(movieId);
  if (!data) {
    return new Response("Movie not found", { status: 404 });
  }
  return NextResponse.json(data);
}
export async function PATCH(req, { params }) {
  const movieId = params?.id;
  const requestBody = await req.json();

  const movieToUpdateIndex = movieList.results.findIndex((movie) => {
    return movie.id.toLocaleString() === movieId;
  });

  if (movieToUpdateIndex === -1) {
    // If movie with the specified ID is not found, return an error response
    return new Response("Movie not found", { status: 404 });
  }

  // Update the movie title
  movieList.results[movieToUpdateIndex].title = requestBody?.title;

  // Return a response indicating success
  return NextResponse.json({
    message: "Movie updated successfully",
    data: movieList.results[movieToUpdateIndex],
  });
}

export async function DELETE(req, { params }) {
  const movieId = params?.id;

  const index = movieList.results.findIndex(
    (movie) => movie.id.toLocaleString() === movieId
  );
  const movieToDelete = movieList.results[index];

  // If movie with the specified ID is not found, return an error response
  if (index === -1) {
    return new Response("Movie not found", { status: 404 });
  }

  // Delete the movie from the movie list
  movieList.results.splice(index, 1);

  return NextResponse.json({
    message: "Movie deleted successfully",
    data: movieToDelete,
  });
}

import { moviesInstance } from "./instance";
import { GetPolularMoviesResponse } from "./types";

export async function getPopularMovies({page}: {page: number}) {
  return moviesInstance.get<GetPolularMoviesResponse>(`movie/popular?language=pt-BR&page=${page}`).then(resp => resp.data)
}

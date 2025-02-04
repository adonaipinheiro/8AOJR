import { moviesInstance } from "./instance";
import { GetPolularMoviesResponse } from "./types";

export async function getPopularMovies({page = 1}) {
  return await moviesInstance.get<GetPolularMoviesResponse>(`movie/popular?language=pt-BR&page=${page}`).then(resp => resp.data)
}

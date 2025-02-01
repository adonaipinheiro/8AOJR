import { useQuery, useQueryClient } from "@tanstack/react-query";
import { getPopularMovies } from "../../services";
import {
  Card,
  Container,
  ErrorContainer,
  Footer,
  Header,
  LoadingContainer,
  MovieInfo,
  MoviesList,
  PaginationArea,
} from "./styles";
import { useCallback, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Commet } from "react-loading-indicators";
import { FaArrowRightFromBracket } from "react-icons/fa6";

export function Home() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const queryClient = useQueryClient();
  const page = parseInt(queryParams.get("page") || "1");

  const { data, isLoading, error } = useQuery({
    queryKey: ["getPopularMovies", page],
    queryFn: () => getPopularMovies({ page }),
  });

  const prefetchNextPage = useCallback(() => {
    queryClient.prefetchQuery({
      queryKey: ["getPopularMovies", page + 1],
      queryFn: () => getPopularMovies({ page: page + 1 }),
    });
  }, [page, queryClient]);

  function fetchPrevPage() {
    navigate(`/movies?page=${page - 1}`);
  }

  function fetchNextPage() {
    navigate(`/movies?page=${page + 1}`);
  }

  function handleError() {
    navigate(`/movies?page=1`);
  }

  function handleLogoff() {
    navigate("/signin", { replace: true });
  }

  useEffect(() => {
    prefetchNextPage();
    scrollTo({ top: 0, behavior: "smooth" });
  }, [prefetchNextPage]);

  return (
    <Container>
      <Header>
        <div className="menuTitle" onClick={handleError}>
          <img src="filmes.webp" alt="FIAP Filmes" />
          <p>FIAP Filmes</p>
        </div>
        <FaArrowRightFromBracket color="red" size={18} onClick={handleLogoff} />
      </Header>
      {isLoading && (
        <LoadingContainer>
          <Commet color="#FFFFFF" size="medium" />
        </LoadingContainer>
      )}
      {error && (
        <ErrorContainer>
          <h3>Poxa, não foi possível carregar seus filmes</h3>
          <p>Verifique que está entre as páginas 1 a 500</p>
          <button onClick={handleError}>Ir para a página 1</button>
        </ErrorContainer>
      )}
      {data && !error && (
        <>
          <MoviesList>
            {data.results.map((movie) => (
              <Card>
                <img
                  src={`https://image.tmdb.org/t/p/w342/${movie.poster_path}`}
                  alt={movie.title}
                />
                <MovieInfo>
                  <h3>{movie.title}</h3>
                  <p>{movie.overview}</p>
                </MovieInfo>
              </Card>
            ))}
          </MoviesList>
          <PaginationArea page={page}>
            <button className="prevButton" onClick={fetchPrevPage}>
              {page - 1}
            </button>
            <button disabled>{page}</button>
            <button className="nextButton" onClick={fetchNextPage}>
              {page + 1}
            </button>
          </PaginationArea>
        </>
      )}
      <Footer>Adonai Pinheiro</Footer>
    </Container>
  );
}

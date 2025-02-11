import {
  Container,
  ErrorContainer,
  Footer,
  Header,
  MoviesList,
} from "./styles";
import { FaArrowRightFromBracket } from "react-icons/fa6";
import { Loading, Pagination } from "./components";
import { useHome } from "./hooks/useHome";
import { Card } from "../../../lib";

export function Home() {
  const { page, data, error, isLoading, handleLogoff, handleNavigateTo } =
    useHome();

  return (
    <Container>
      <Header>
        <div className="menuTitle" onClick={() => handleNavigateTo(1)}>
          <img src="filmes.webp" alt="FIAP Filmes" />
          <p>FIAP Filmes</p>
        </div>
        <FaArrowRightFromBracket color="red" size={18} onClick={handleLogoff} />
      </Header>
      {isLoading && <Loading />}
      {error && (
        <ErrorContainer>
          <h3>Poxa, não foi possível carregar seus filmes</h3>
          <p>Verifique que está entre as páginas 1 a 500</p>
          <button onClick={() => handleNavigateTo(1)}>
            Voltarr para página principal
          </button>
        </ErrorContainer>
      )}
      {data && !error && (
        <>
          <MoviesList>
            {data.results.map((movie) => (
              <Card
                imagePath={`https://image.tmdb.org/t/p/w342${movie.poster_path}`}
                title={movie.title}
                overview={movie.overview}
              />
            ))}
          </MoviesList>
          <Pagination
            page={page}
            prevFunc={() => handleNavigateTo(page - 1)}
            nextFunc={() => handleNavigateTo(page + 1)}
          />
        </>
      )}
      <Footer>Adonai Pinheiro</Footer>
    </Container>
  );
}

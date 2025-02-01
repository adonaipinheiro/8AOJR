import { useLocation, useNavigate } from "react-router-dom";
import { Button, Container } from "./styles";

export function NotFound() {
  const navigate = useNavigate();
  const location = useLocation();

  function handleRedirect() {
    navigate(location.state?.from || "/", { replace: true });
  }

  return (
    <Container>
      <img src="filmes.webp" />
      <h2>#404</h2>
      <h3>Página não encontrada :{"("}</h3>
      <Button onClick={handleRedirect}>Voltar</Button>
    </Container>
  );
}

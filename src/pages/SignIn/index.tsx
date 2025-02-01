import { useNavigate } from "react-router-dom";
import { Button, Container, SignInArea } from "./styles";

export function SignIn() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/", { replace: true });
  }

  return (
    <Container>
      <SignInArea>
        <img src="filmes.webp" />
        <div className="input">
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" />
          <span>* Digite um e-mail válido</span>
        </div>
        <div className="input">
          <label htmlFor="password">Senha</label>
          <input type="password" name="password" id="password" />
        </div>
        <Button onClick={handleHome}>Entrar</Button>
      </SignInArea>
    </Container>
  );
}

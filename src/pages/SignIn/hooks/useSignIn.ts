import { useNavigate } from "react-router-dom";

export function useSignIn() {
  const navigate = useNavigate();

  function handleHome() {
    navigate("/", { replace: true });
  }

  return {
    handleHome
  }
}

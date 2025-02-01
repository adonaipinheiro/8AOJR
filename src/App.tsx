import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Router } from "./routes/index.routes";
import { GlobalStyles } from "./styles/globalStyles";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <Router />
    </QueryClientProvider>
  );
}

export default App;

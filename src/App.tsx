import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { CoinTableComponent } from "./components/coin-table";
import { useEffect } from "react";

const queryClient = new QueryClient();

function App() {
  useEffect(() => console.log(queryClient, "client"), []);

  return (
    <QueryClientProvider client={queryClient}>
      <CoinTableComponent />
    </QueryClientProvider>
  );
}

export default App;

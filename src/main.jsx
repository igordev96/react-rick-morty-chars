import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import { GlobalStyle } from "./GlobalStyle";

const queryClient = new QueryClient();

ReactDOM.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <GlobalStyle />
      <App />
    </React.StrictMode>
  </QueryClientProvider>,
  document.getElementById("root")
);

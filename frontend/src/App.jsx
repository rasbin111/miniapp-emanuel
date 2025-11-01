import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/login";
import Layout from "./components/Layout";
import PageNotFound from "./pages/pageNotFound";
import Home from "./pages/Home";
import TermsPage from "./pages/terms";
import { LanguageContextProvider } from "./context/languageContext";


const queryClient = new QueryClient();
const router = createBrowserRouter([
  { path: "/login", Component: LoginPage },
  { path: "/", Component: Home },
  { path: "/terms", Component: TermsPage },
  { path: "*", Component: PageNotFound },
]);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <LanguageContextProvider>
        <RouterProvider router={router} />
      </LanguageContextProvider>
    </QueryClientProvider>
  );
}

export default App;

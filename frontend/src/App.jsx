import { createBrowserRouter, RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import LoginPage from "./pages/login";
import PageNotFound from "./pages/pageNotFound";
import Home from "./pages/Home";
import TermsPage from "./pages/terms";
import { LanguageContextProvider } from "./context/languageContext";
import HeaderWithSidebar from "./components/headerWithSidebar";
import PriceListPage from "./pages/priceList";
import Invoices from "./pages/Extra/invoices";
import Customers from "./pages/Extra/customers";
import MyBusiness from "./pages/Extra/myBusiness";
import InvoiceJournal from "./pages/Extra/invoiceJournal";


const queryClient = new QueryClient();

const router = createBrowserRouter([
  { path: "/login", Component: LoginPage },
  {
    path: "/", element: <HeaderWithSidebar />, children: [
      { path: "", Component: Home },
      { path: "/price-list", Component: PriceListPage },
      { path: "/invoices", Component: Invoices },
      { path: "/my-business", Component: MyBusiness },
      { path: "/invoice-journal", Component: InvoiceJournal },
      { path: "/customers", Component: Customers },
    ]
  },
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

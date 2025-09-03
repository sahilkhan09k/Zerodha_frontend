// routes.js
import Root from "./pages/Root";
import HomePage from "./pages/home/HomePage";
import AboutPage from "./pages/about/AboutPage";
import PricingPage from "./pages/pricing/PricingPage";
import ProductsPage from "./pages/products/ProductsPage";
import SignUp from "./pages/signup/SignUp";
import LoginPage from "./pages/login/LoginPage";
import SupportPage from "./pages/support/SupportPage";
import NotFound from "./pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "./pages/dashboard/Dashboard";

export const routes = [
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "dashboard", element: <PrivateRoute><Dashboard /></PrivateRoute> },
      { path: "", element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "pricing", element: <PricingPage /> },
      { path: "products", element: <ProductsPage /> },
      { path: "signup", element: <SignUp /> },
      { path: "login", element: <LoginPage /> },
      { path: "support", element: <SupportPage /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

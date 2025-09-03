// index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { store } from "./store/store";
import AuthProvider from "./authProvider.js";
import { routes } from "./routes.js"; 
import { Toaster } from 'react-hot-toast';
import './index.css';

const router = createBrowserRouter(routes);  // ✅ build router from routes

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <AuthProvider>
        <RouterProvider router={router} />   {/* ✅ use router, not routes */}
      </AuthProvider>
    </React.StrictMode>
    <Toaster />
  </Provider>
);

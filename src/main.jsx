import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import Create from "./pages/Create.jsx";
import View from "./pages/View.jsx";
import ContextProvider from "./context/ContextProvider.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Navigate to="/create" />} />
      <Route path="create" element={<Create />} />
      <Route path="view" element={<View />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  </ContextProvider>
);

/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { lazy } from "solid-js";
import "./index.css";
import App from "./App";
import { CartContextProvider } from "./context/CartContext";

const root = document.getElementById("root");
const routes = [
  {
    path: "/",
    component: lazy(() => import("./pages/Home"))
  },
  {
    path: "/cart",
    component: lazy(() => import("./pages/Cart"))
  },
  {
    path: "/product/:id",
    component: lazy(() => import("./pages/Product"))
  }
];

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
  throw new Error(
    "Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got misspelled?"
  );
}

render(
  () => (
    <CartContextProvider>
      <Router root={App}>{routes}</Router>
    </CartContextProvider>
  ),
  root
);

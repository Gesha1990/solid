import { createSignal } from "solid-js";
import banner from "./assets/banner.png";
import { Router, A } from "@solidjs/router";
import { useCartContext } from "./context/CartContext";

function App(props) {
  const [darkTheme, setDarkTheme] = createSignal(false);
  const { items } = useCartContext();
  function toggleTheme() {
    setDarkTheme(!darkTheme());
  }
  const quantity = () => {
    return items.reduce((acc, current) => {
      return acc + current.quantity;
    }, 0);
  };
  return (
    <div class="container m-auto">
      <header
        classList={{
          "bg-neutral-900": darkTheme(),
          "text-white": darkTheme()
        }}
        class="my-4 p-2 text-xl flex items-center gap-4"
      >
        <span
          onClick={toggleTheme}
          class="material-symbols-outlined cursor-pointer"
        >
          light_mode
        </span>
        <h1>Ninja Merch</h1>
        <A href="/">Home</A>
        <A href="/cart">Cart ({quantity()})</A>
      </header>
      <img class="rounded-md" src={banner} alt="banner" />
      {props.children}
    </div>
  );
}

export default App;

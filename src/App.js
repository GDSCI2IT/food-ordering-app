import { Fragment, useState } from "react";
import Cart from "./components/cart/Cart";
import Header from "./components/layout/Header";
import Meals from "./components/meals/Meals";
import CartProvider from "./store/CartProvider";


function App() {

  const [cartShown, setCartShown] = useState(false);

  const showCart = () => {
    setCartShown((prevState) => {
      return (~prevState)
    })
  }

  return (
    <CartProvider>
      <Fragment>
        {cartShown && <Cart showCart={showCart} />}
        <Header showCart={showCart} />
        <main>
          <Meals />
        </main>
      </Fragment>
    </CartProvider>
  );
}

export default App;

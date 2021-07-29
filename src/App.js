import Home from "./components/Home";


function App({ cartItems, removeShopingCart, addQuantityCart, removeQuantityCart, totalPrice }) {
  return (
    <div className="App">
      <Home
        totalPrice={totalPrice}
        cartItems={cartItems}
        removeShopingCart={removeShopingCart}
        addQuantityCart={addQuantityCart}
        removeQuantityCart={removeQuantityCart} />
    </div>
  );
}

export default App;

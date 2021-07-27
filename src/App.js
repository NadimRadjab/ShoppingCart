import Home from "./components/Home";


function App({ cartItems }) {
  return (
    <div className="App">
      <Home cartItems={cartItems} />
    </div>
  );
}

export default App;

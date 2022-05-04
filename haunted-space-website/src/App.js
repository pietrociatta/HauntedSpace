import "./App.css";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Product from "./sections/Product";

function App() {
  return (
    <div className="">
      <div className="">
        <Header />
      </div>
      <div className="pt-14">
        <Hero />
      </div>
      <div className="">
        <Product />
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import Header from "./components/Header";
import Hero from "./sections/Hero";

function App() {
  return (
    <div>
      <div className="">
        <Header />
      </div>
      <div className="pt-14">
        <Hero />
      </div>
    </div>
  );
}

export default App;

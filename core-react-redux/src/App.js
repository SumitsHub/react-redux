import "./App.css";
import Counter from "./components/Counter/Counter";
import GeoLocation from "./components/GeoLocation/GeoLocation";

function App() {
  return (
    <div className="App">
      <h1>React Redux</h1>
      <hr />
      <Counter />
      <hr />
      <GeoLocation />
    </div>
  );
}

export default App;

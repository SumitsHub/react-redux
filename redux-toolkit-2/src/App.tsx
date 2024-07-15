import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { increment } from "./feature/counter";
type State = {
  counter: { value: number };
};
function App() {
  // const [count, setCount] = useState(0)
  const count = useSelector<State, any>(state => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux toolkit - Advanced Concepts</h1>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;

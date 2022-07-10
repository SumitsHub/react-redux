import "./App.css";
import BikeContainer from "./components/BikeContainer/BikeContainer";
import { Provider } from "react-redux";
import store from './redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BikeContainer />
      </div>
    </Provider>
  );
}

export default App;

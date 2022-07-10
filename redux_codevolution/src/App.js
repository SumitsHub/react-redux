import "./App.css";
import BikeContainer from "./components/BikeContainer/BikeContainer";
import { Provider } from "react-redux";
import store from './redux/store';
import CakeContainer from "./components/CakeContainer/CakeContainer";
import ItemContainer from "./components/ItemContainer/ItemContainer";
import UserContainer from "./components/UserContainer/UserContainer";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BikeContainer />
        <hr/>
        <CakeContainer />
        <hr/>
        <ItemContainer itemName="cake"/>
        <hr/>
        <ItemContainer itemName="bike"/>
        <hr/>
        <UserContainer />
      </div>
    </Provider>
  );
}

export default App;

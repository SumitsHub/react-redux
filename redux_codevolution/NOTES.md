## React Redux
Basic Example of core redux with react application

# packages used
redux, react-redux

# mapStateToProps
Implicit way of binding redux states to component props
A function which gets state as an argument and return object containing desired states which application will receive through props
If not required this function, just pass null to the connect function

Example - 
const mapStateToProps = (state, ownProps) => {
  const itemState =
    ownProps.itemName === "cake" ? state.cake.numOfCakes : state.bike.numOfBikes;

  return {
    itemCount: itemState,
  };
};


# mapDispatchToProps
Function gets dispatch as an argument and returns object of functions dispatching desired actions

Example - 
const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction =
    ownProps.itemName === "cake"
      ? () => dispatch(buyCake())
      : () => dispatch(buyBike());
  return {
    buyItem: dispatchFunction,
  };
};

# connect - from react-redux
Function helps to connect react application with redux
Curried function which takes mapStateToProps and mapDispatchToProps as an argument and returns HOC

# Redux devtools extension
npm install --save redux-devtools-extension
import { composeWithDevTools } from 'redux-devtools-extension';
const store = createStore(reducer, composeWithDevTools(
  applyMiddleware(...middleware),
  // other store enhancers if any
));

# react-redux hooks
1. useDispatch hook - provides function to dispatch an action
2. useSelector - using useSelector we can select desired state, callback passed to useSelector received state object as argument and using that state we can return specific state value

# Asynchronous actions using redux-thunk
thunk allows to return function with dispatch function as an argument instead of pure JS objects
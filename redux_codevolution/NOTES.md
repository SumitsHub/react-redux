## React Redux
Basic Example of core redux with react application

# packages used
redux, react-redux

# mapStateToProps
Implicit way of binding states to props
A function which gets state as an argument and return object containing desired states which application will receive through props

# mapDispatchToProps
Function gets dispatch as an argument and returns object of functions dispatching desired actions

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
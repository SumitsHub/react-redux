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
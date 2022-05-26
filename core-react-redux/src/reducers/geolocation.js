const geoLocationReducer = (state = { data: [], loading: true }, action) => {
  switch (action.type) {
    case "GET_LOCATIONS":
      return { data: action.payload, loading: false };
    default:
      return state;
  }
};

export default geoLocationReducer;

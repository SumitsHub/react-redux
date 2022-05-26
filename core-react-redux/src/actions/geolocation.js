export const getLocations = () => dispatch => {
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
      "X-RapidAPI-Key": "d8fea8566fmshd84be79449cf90cp15010bjsnedba8363a58e",
    },
  };

  return fetch(
    "https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions",
    options
  )
    .then((res) => res.json())
    .then((res) => {
      dispatch({ type: "GET_LOCATIONS", payload: res.data });
    });
};

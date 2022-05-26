import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getLocations } from "../../actions/geolocation";
import Location from "./Location/Location";
import "./GeoLocation.css";

function GeoLocation() {
  const dispatch = useDispatch();
  const { data: locations, loading } = useSelector(
    (state) => state.geoLocation
  );
  useEffect(() => {
    dispatch(getLocations());
  }, []);

  return (
    <div className="geoloaction-container">
      <h2>GeoLocation Component</h2>
      <p>This component consumes geolocation rapid api!</p>
      <p>This is an example for redux thunk!</p>
      <div className="locations-list">
      {loading ? (
        <h3>Fetching Data...</h3>
      ) : (
        locations.map((location) => (
          <Location key={location.id} location={location} />
        ))
      )}
      </div>
    </div>
  );
}

export default GeoLocation;

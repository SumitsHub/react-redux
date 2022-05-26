import React from "react";
import "./Location.css";

function Location({ location }) {
  const { name, country } = location;
  return (
    <div className="location-container">
      Location: {name}, Country: {country}
    </div>
  );
}

export default Location;

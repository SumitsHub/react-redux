import React from "react";
import { connect } from "react-redux";
import { addBike, buyBike } from "../../redux/features/bike/actions";

function BikeContainer(props) {
  const { numOfBikes, buyBike, addBike } = props;
  return (
    <div>
      <h2>Number of bikes - {numOfBikes}</h2>
      <button onClick={buyBike}>Buy Bike</button>
      <button onClick={addBike}>Add Bike</button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    numOfBikes: state.bike.numOfBikes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyBike: () => dispatch(buyBike()),
    addBike: () => dispatch(addBike())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BikeContainer);

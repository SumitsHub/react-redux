import React from "react";
import { connect } from "react-redux";
import { buyBike } from "../../redux/features/bike/actions";
import { buyCake } from "../../redux/features/cake/actions";
function ItemContainer({ itemName, itemCount, buyItem }) {
  return (
    <div>
      <h2>Item - {itemName}</h2>
      <h3>Count - {itemCount}</h3>
      <button onClick={buyItem}>Buy Item</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState =
    ownProps.itemName === "cake"
      ? state.cake.numOfCakes
      : state.bike.numOfBikes;

  return {
    itemCount: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunction =
    ownProps.itemName === "cake"
      ? () => dispatch(buyCake())
      : () => dispatch(buyBike());
  return {
    buyItem: dispatchFunction,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);

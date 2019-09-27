import React, { useEffect } from "react";
import { connect } from "react-redux";

import { fetchPokemon } from "../actions";

const Pokemon = ({ fetchPokemon, isLoading, cardImg }) => {
  console.log("cardImg", cardImg);
  useEffect(() => {
    fetchPokemon();
  }, [fetchPokemon]);

  if (isLoading) {
    return <h2>Loading Pokemon Cards...</h2>;
  }
  return <div className="pokemon">{cardImg}</div>;
};

const mapStateToProps = state => {
  return {
    cardImg: state.cardImg,
    isLoading: state.isLoading
  };
};

export default connect(
  mapStateToProps,
  { fetchPokemon }
)(Pokemon);

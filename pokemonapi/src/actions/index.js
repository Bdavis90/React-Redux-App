import React from "react";
import axios from "axios";

export const FETCH_POKEMON_START = "FETCH_POKEMON_START";
export const FETCH_POKEMON_SUCCESS = "FETCH_POKEMON_SUCCESS";

export const fetchPokemon = () => {
  return function(dispatch) {
    dispatch({ type: FETCH_POKEMON_START });
    axios
      .get("https://api.pokemontcg.io/v1/cards")
      .then(res => {
        console.log("action res data", res.data.cards.map(card => card));
        dispatch({
          type: FETCH_POKEMON_SUCCESS,
          payload: res.data.cards.map(card => (
            <img src={card.imageUrl} className="card" />
          ))
        });
      })
      .catch(err => console.error(err));
  };
};

import React from "react";
import "../App.css";

const Pokemonrow = ({ pokemon: { id, name, types, sprite } }) => {
  return (
    <tr>
      <td>{id}</td>
      <td>{name}</td>
      <td>{types[0]}</td>
      <td className="image-wrapper">
        <img src={sprite} />
      </td>
    </tr>
  );
};

export default Pokemonrow;

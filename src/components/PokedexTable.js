import React from "react";
import Pokemonrow from "./Pokemonrow";

const PokedexTable = ({ pokemons }) => {
  return (
    <table border="2">
      <thead>
        <th>ID</th>
        <th>Name</th>
        <th>Types</th>
        <th>Pokemon</th>
      </thead>
      <tbody>
        {pokemons.map((pokemon) => (
          <Pokemonrow key={pokemon.id} pokemon={pokemon} />
        ))}
      </tbody>
    </table>
  );
};

export default PokedexTable;

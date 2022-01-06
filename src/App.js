import PokedexTable from "./components/PokedexTable";
import "./App.css";

function App() {
  const pokemonArray = [
    {
      id: 1,
      name: "Bulbasaur",
      types: ["grass"],
      sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      id: 2,
      name: "Bulbasaur",
      types: ["grass"],
      sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
    {
      id: 3,
      name: "Bulbasaur",
      types: ["grass"],
      sprite: "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    },
  ];

  return (
    <div className="App">
      <PokedexTable pokemons={pokemonArray} />
    </div>
  );
}

export default App;

import PokemonProvider from "./context/pokemons/Provider";
import Routes from "./routes";
import './App.css';

function App() {
  return (
    <PokemonProvider>
      <Routes/>
    </PokemonProvider>
  );
}

export default App;

import PokemonListItems from "./PokemonListItems";

export default function PokemonList({ pokemons }){

    return(
        <div>
            {pokemons?.map((pokemon, index) =>  <PokemonListItems key={ index } {...pokemon } /> )}
        </div>
    );
}
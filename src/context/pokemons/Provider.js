import PokemonContext from "./index";
import {useState} from "react";
import apiCall from "../../api";

export default function PokemonProvider({children}){

    const [pokemons, setPokemons] = useState([]);
    const [pokemonDetails, setPokemonDetails] = useState({})
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const getPokemons = async () => {
        try{
            setIsLoading(true);
            setHasError(false);
            setErrorMessage("");

            const results = await apiCall({url: "https://pokeapi.co/api/v2/pokemon?limit=100"});
            setPokemons(results.results);

        } catch(error){
            setPokemons([]);
            setHasError(true);
            setErrorMessage("Algo ha pasado....");
        } finally {
            setIsLoading(false);
        }
    }

    const getPokemonDetails = async (id) => {
        if(!id) return Promise.reject("Falta id");
        try{
            setIsLoading(true);
            setHasError(false);
            setErrorMessage("");

                const pokemonDetails = await apiCall( {url: `https://pokeapi.co/api/v2/pokemon/${id}` } ) ;
                setPokemonDetails(pokemonDetails);

        }catch( error ){
            setPokemonDetails({});
            setHasError(true);
            setErrorMessage("Algo ha pasado....");

        } finally {
            setIsLoading(false);
        }
    }

    return(
        <PokemonContext.Provider value={{ getPokemons, 
                                          pokemons, 
                                          getPokemonDetails, 
                                          pokemonDetails,
                                          errorMessage,
                                          hasError,
                                          isLoading }}>
            {children}
        </PokemonContext.Provider>
    );
}
import { useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import PokemonContext from  "../../context/pokemons";
import Pokestats from "./components/PokeStats";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";

export default function PokeDetails(){
    
    const { id } = useParams();
    const { getPokemonDetails, pokemonDetails, isLoading, hasError, errorMessage } = useContext(PokemonContext)

    useEffect( () =>{
        getPokemonDetails(id).catch(null);
    }, []);

    if(isLoading){
       return <Loading title="Cargando pokemon...." />;
    }
    
    return(
        <div>
            {hasError ? <ErrorMessage message={errorMessage} /> :
                (
                    <>
                        <h3 style={{ marginTop: 30, marginBottom: 15 }}> 
                                Info General
                        </h3>
                        <p> {`Name: ${pokemonDetails?.name}`} </p>
                        <p> {`Weight: ${pokemonDetails?.weight}`} </p>
                        <p> {`Height: ${pokemonDetails?.Height}`} </p>
                        <div>
                            <h3 style={{marginTop: 30, marginBottom: 15}} > 
                                Habilitades 
                            </h3>
                            <Pokestats stats={pokemonDetails?.stats ?? [] } />
                        </div>
                    </>
                )
            
            }   
            
        </div>
    );
}
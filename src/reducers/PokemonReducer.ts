import { PokemonDispatchTypes, PokemonType, POKEMON_FAIL, POKEMON_LOADING, POKEMON_SUCCESS } from "../actions/pokemonActionTypes";

interface DefaultStateInterface {
    loading: boolean
    pokemon?: PokemonType
}

const defaultState: DefaultStateInterface = {
    loading: false
};

const pokemonReducer = (state: DefaultStateInterface = defaultState, action: PokemonDispatchTypes): DefaultStateInterface => {
    switch (action.type) {
        case POKEMON_FAIL:
            return {
                loading: false
            }
        case POKEMON_LOADING: 
            return {
                loading: true
            }
        case POKEMON_SUCCESS:
            return {
                loading: false,
                pokemon: action.payload
            }
        default:
            return state
        }
};

export default pokemonReducer;
interface DefaultStateInterface {

}

const defaultState: DefaultStateInterface = {

};

const pokemonReducer = (state: DefaultStateInterface = defaultState, action: any): DefaultStateInterface => {
    return state
};

export default pokemonReducer;
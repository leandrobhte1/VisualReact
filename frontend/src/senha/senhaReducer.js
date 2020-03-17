const INITIAL_STATE = {fluxo: 0, senhaAtual: 90}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'FLUXO_CHANGED':
            console.log("ola");
            return { ...state, fluxo: action.payload}
        default:
            return state
    }
}
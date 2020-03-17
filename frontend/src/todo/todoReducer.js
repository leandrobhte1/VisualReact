const INITIAL_STATE = {description: '',list: [], languages: [], options: [], fluxo: 0}

export default (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'DESCRIPTION_CHANGED':
            return { ...state, description: action.payload }
        case 'TODO_SEARCHED':
            return { ...state, list: action.payload}
        case 'LANGUAGE_SEARCHED':
            return { ...state, languages: action.payload}
        case 'OPTIONS_SEARCHED':
            return { ...state, options: action.payload}
        case 'TODO_CLEAR':
            return { ...state, description: ''}
        case 'FLUXO_CHANGED':
            console.log("ola");
            return { ...state, fluxo: action.payload}
        default:
            return state
    }
}
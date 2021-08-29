const initialState = {
    user: "Onotole"
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GOOD':
            return {...state, user: state.user + '' + action.payload}
        case 'BAD':
            return {...state, user: state.user + ' cyka blyat '  + action.payload}
        default:
            return state
    }
}

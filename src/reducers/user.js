const initialState = {
    user: "Onotole"
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'AUTH/LOGIN':
            return {...state, user: action.payload}
        default:
            return state
    }
}

export {userReducer};
const initialState = {
    isOpen: false
};

export default function navBarReducer(state = initialState, action) {
    switch (action.type) {
        case "TOGGLE_NAVBAR":
            return {
                isOpen: !state.isOpen
            }
        default:
            return state;
    }
}


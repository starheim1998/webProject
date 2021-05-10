const initialState = {
    isOpen: false
};

/**
 * Navbar reducer - saves the navbar state throughout the
 * @param state
 * @param action
 * @returns {{isOpen: boolean}}
 */

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


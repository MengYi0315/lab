const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case "SAVE_TestData":
            return { ...state, TestData: payload };
        default:
            return state;
    }
}
const initialState = {};

export default (state = initialState, { type, payload }) => {
    switch(type) {
        case "SAVE_TestData":
            return { ...state, TestData: payload };
        // case "SAVE_名稱(自行取)":
            // return { ...state, 名稱(自行取): payload };
        default:
            return state;
    }
}
const mathReducer = (state = {
    result: 100,
    lastValues: []
}, action) => {
    switch (action.type) {
        case "ADD":
            state = {
                ...state,
                result: state.result + action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            //state.lastValues.push(action.payload);
            // state.result += action.payload
            break;
        case "SUBTRACT":
            state = {
                ...state,
                result: state.result - action.payload,
                lastValues: [...state.lastValues, action.payload]
            };
            //state.lastValues.push(action.payload);
            break;
        default:
            break;
    }
    return state;
};
export default mathReducer;
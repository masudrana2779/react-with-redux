const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'deposit':
            return  action.payload;
        case "withdraw":
            return action.payload;
        default:
            return state;
    }
}

export default reducer;
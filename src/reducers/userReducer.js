const userReducer = (state = "", action) => {
    switch(action.type) {
        case "LOAD_USER_DATA": 
        console.log("BOOOOOOOOOOOO")
        console.log(action.payload)
            state = Object.assign({}, action.payload);
            return state;
        default: 
            return state;
    }
}
export default userReducer;
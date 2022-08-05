

function Reducer(state = [], action) {

    switch (action.type) {
        case "EDIT":
            return [true, action.payload]

        case "CANCEL":
            return state[0] = false
            
        default:
            return state;
    }

}
export default Reducer
export const reducer = (state = {
    name_reducer:'jana'
},action) => {

    switch(action.type){
        case "CHANGE_NAME":
        return Object.assign({},state,{name_reducer:action.payload.name_actions})

        default:
        return state;
    }
}
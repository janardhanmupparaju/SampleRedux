export function changeName(inputElement){
    console.log("this is from Actions: in changeName",inputElement.value)
    return {
        type:"CHANGE_NAME",
        payload:{
            name_actions:inputElement.value
        }
    }
}
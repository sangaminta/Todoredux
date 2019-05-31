import * as actionType from './actionType';

export function addTodo(payload) {
    return { type: actionType.ADD_TODO, payload}
}
 
export function subTodo(payload) {
    return { type: actionType.SUB_TODO, payload}
}
export function check(payload) {
    return{type:actionType.CHECK_TODO,payload}
}



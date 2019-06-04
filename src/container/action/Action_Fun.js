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

export function edit(payload) {
    return{type:actionType.EDIT_TODO,payload}
}

export function edit_text(payload) {
    return{type:actionType.EDIT_TODO_TEXT,payload}
}

export function edit_input(payload){
    return{type:actionType.EDIT_TODO_INPUT,payload}
}

export function edit_submit(payload) { 
    return{type:actionType.EDIT_TODO_SUBMIT,payload}
}  

export function delete_todo(payload) {
    return{type:actionType.DELETE_TODO,payload}
}


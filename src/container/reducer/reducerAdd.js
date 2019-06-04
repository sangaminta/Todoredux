import * as actionType from '../action/actionType';
import uuid from 'uuid';
const initialState = {
    todolist:[],
    inputValue:'',
    id:uuid(),
    empty:false 
};
 export const reducerAdd = (state = initialState , action)=>{
     
    switch(action.type){
        case actionType.ADD_TODO:
        return Object.assign({},state ,{inputValue:action.payload});

        case actionType.SUB_TODO:
        return Object.assign({}, state,{id:uuid(),inputValue:'',todolist:[...state.todolist,action.payload]})

        case actionType.CHECK_TODO:
        return Object.assign({},state,{todolist:action.payload})

        case actionType.EDIT_TODO:
        console.log('action payload......',action.payload)
        return Object.assign({},state,{inputValue:action.payload.selectItem.todo,todolist:action.payload.filterItems})

        default:
        return state;
    }
}


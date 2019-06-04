import * as actionType from '../action/actionType';
import uuid from 'uuid';
import  cloneDeep  from 'lodash/cloneDeep';
const initialState = {
    todolist:[],
    inputValue:'',
    id:uuid()  
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

        case actionType.EDIT_TODO_TEXT:
        return Object.assign({},state,{todolist:action.payload});

        case actionType.EDIT_TODO_INPUT:
        let x=cloneDeep(state)
        x.todolist[action.payload.index].inputEdit = action.payload.todoEdit;
        return x
        case actionType.EDIT_TODO_SUBMIT:
        
        return Object.assign({},state,{todolist:action.payload})
       
        default:
        return state;
    }
}


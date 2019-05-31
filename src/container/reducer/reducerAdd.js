import * as actionType from '../action/actionType';

const initialState = {
    todolist:[],
    inputValue:''
};

 export const reducerAdd = (state = initialState , action)=>{
     
    switch(action.type){
        case actionType.ADD_TODO:
        return Object.assign({},state ,{inputValue:action.payload});

        case actionType.SUB_TODO:
        return Object.assign({}, state,{inputValue:'',todolist:[...state.todolist,action.payload]})

        case actionType.CHECK_TODO:
        return Object.assign({},state,{todolist:action.payload})

        default:
        return state;
    }
}


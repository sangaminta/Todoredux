import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {addTodo,subTodo,check,edit,edit_text,edit_input,edit_submit,delete_todo} from "../container/action/Action_Fun";

class TodoInput extends Component {

    handlerChange = event =>
    {
        const text = event.target.value
        this.props.actionForAddTodo(text)
    }
   
    handleSubmit = e =>
    {
        e.preventDefault();
        const data = {
            todo : this.props.inputValue,
            checked:false,
            id:this.props.id,
            isEdit:false,
            inputEdit:'' 
        }

        this.props.actionForSubmit(data);
    }

    
    handlerCheck = index => 
    {
        const itemss = [...this.props.todolist]
        itemss[index].checked = !itemss[index].checked
        this.props.actiononcheckbox(itemss)
    }

    handlerEdit = item =>
    {
        const filterItems = this.props.todolist.filter(todo => todo.id !== item.id)
        const selectItem = this.props.todolist.find(todo => todo.id === item.id)
        this.props.actionForEdit({filterItems,selectItem});
    }

    handlerEditTodo = index =>
    {
        const todoItems = [...this.props.todolist]
        todoItems[index].isEdit = !todoItems[index].isEdit
        todoItems[index].inputEdit = todoItems[index].todo;
        this.props.actionForEditTodo(todoItems)
    }
    handlerEditChange =(event,index) =>{
        const todoEdit = event.target.value;
        this.props.actionForInputEdit({todoEdit,index});
    }
    handSubmit = (index,event,item) => {
        event.preventDefault();
        const data = {
            todo:this.props.todolist[index].inputEdit,
            checked:false,
            id:this.props.todolist[index].id,
            isEdit:false,
            inputEdit:''
        }
        const filterItems = this.props.todolist.filter(todo => todo.id !== item.id)
        filterItems.push(data);        
        this.props.actionForEditSubmit(filterItems);
    }
    handlerdeleteTodo = item => {
        const filterItems = this.props.todolist.filter(todo => todo.id !== item.id)
        this.props.actionForDelete({filterItems});
    }
    
    render() { 
        
        const{inputValue,todolist} = this.props;
        return (
            <div> 
                <form onSubmit={this.handleSubmit}  >
                    <div className="input-group">
                        <input type="text" className="form-control text-capitalize " value ={inputValue} onChange ={this.handlerChange}  placeholder="your todo item" />
                        <span className="input-group-btn">
                            <button className="btn btn-default  border" type="submit">
                                <i className="fa fa-search"></i>
                            </button>
                        </span>
                    </div>
                </form>    
                    <br />
                <div >
                        { todolist.map((item,index)=>{
                            console.log(item)
                            return(
                                item.todo===''?'':
                                <div className = 'form-control text-capitalize my-2 d-flex'  key ={index}>
                                    <span><input type ="checkbox" key ={item.id}   onClick ={()=>this.handlerCheck(index)} /> </span>
                                    <span className ='mx-2'> {item.isEdit ?
                                    <form onSubmit = {(event)=>this.handSubmit(index,event,item)} >
                                        <input type='text' onChange = {(event)=>this.handlerEditChange(event,index)} value = {todolist[index].inputEdit} />
                                    </form>
                                    :item.todo }  </span>
                                    
                                   
                                    <span className=' float-right'>
                                    <button type="button" className="btn btn-success" id='edit' onClick={()=>this.handlerEditTodo(index)}>{todolist[index].isEdit?'update':'Edit-Todo'}</button>
                                    </span>
                                    <span className = 'mx-2 text-success float-right'>
                                        <i className ={item.checked?'fas fa-pen':''} onClick ={()=>this.handlerEdit(item)} />
                                        <button type="button" className="btn btn-danger" id='edit' onClick={()=>this.handlerdeleteTodo(item)}>Delete</button>
                                    </span>
                                    <span className ={item.checked?'.col bg-dark rounded text-white float-right':""}>{item.checked? 'complete':''}</span>                          
                                </div>
                            )
                        })}      
                   </div>       
            </div>
        )
    }
}
const mapStateToProps = (state) =>{    
    return{
        inputValue: state.reducerAdd.inputValue,
        todolist:state.reducerAdd.todolist,
        id:state.reducerAdd.id,
        inputText:state.reducerAdd.inputText
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
      actionForAddTodo:(todo_title)=>dispatch(addTodo(todo_title)),
      actionForSubmit:(todo_submit)=>dispatch(subTodo(todo_submit)),
      actiononcheckbox:(todo_check)=>dispatch(check(todo_check)),
      actionForEdit:(todo_edit)=>dispatch(edit(todo_edit)),
      actionForEditTodo:(todo_edit_text)=>dispatch(edit_text(todo_edit_text)),
      actionForInputEdit:(todo_Input_Edit) => dispatch(edit_input(todo_Input_Edit)),
      actionForEditSubmit:(todo_Input_Sub) => dispatch(edit_submit(todo_Input_Sub)),
      actionForDelete:(delete_todo_item) => dispatch(delete_todo(delete_todo_item))

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

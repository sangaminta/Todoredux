import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {addTodo,subTodo,check,edit} from "../container/action/Action_Fun";

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
            id:this.props.id
        }
        this.props.actionForSubmit(data);
    }

    handlerCheck = index => 
    {
        const itemss = [...this.props.todolist]
        console.log("index",itemss)
        itemss[index].checked = !itemss[index].checked
        this.props.actiononcheckbox(itemss)
    }
    handlerEdit = item =>
    {
        console.log("--handleedit---",item.checked)
        const filterItems = this.props.todolist.filter(todo => todo.id !== item.id)
        const selectItem = this.props.todolist.find(todo => todo.id === item.id)
        this.props.actionForEdit({filterItems,selectItem});
    }
    
    render() { 
        
        const{inputValue,todolist} = this.props;
        console.log('todolist----',todolist)
        return (
            <div> 
                <div >
                        {todolist.map((item,index)=>{
                            return(
                                
                                <div className = 'form-control text-capitalize my-2' key ={index}>
                                 <span><input type ="checkbox" key ={item.id}   onClick ={()=>this.handlerCheck(index)} /> </span>
                                 <span className ='mx-2'> {item.todo} </span>
                                 <span className = 'mx-2 text-success float-right'>
                                     <i className ={item.checked?'fas fa-pen':''} onClick ={()=>this.handlerEdit(item)} />
                                 </span>
                                 <span className ={item.checked?'.col bg-dark rounded text-white float-right':""}>{item.checked? 'complete':''}</span>                          
                                </div>
                            )
                        })}      
                   </div>  

                <form onSubmit={this.handleSubmit}  >
                    <div className ='input-group'>
                        <input type ='text' className='form-control text-capitalize mt-4 ' value ={inputValue} onChange ={this.handlerChange} placeholder='your todo item' />
                    </div>
                    <button type='submit' className='btn btn-block btn-primary mt-4'>ADD</button>  
                </form>      
                    <br />
                    
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    
    return{
        inputValue: state.reducerAdd.inputValue,
        todolist:state.reducerAdd.todolist,
        id:state.reducerAdd.id
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
      actionForAddTodo:(todo_title)=>dispatch(addTodo(todo_title)),
      actionForSubmit:(todo_submit)=>dispatch(subTodo(todo_submit)),
      actiononcheckbox:(todo_check)=>dispatch(check(todo_check)),
      actionForEdit:(todo_edit)=>dispatch(edit(todo_edit))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { connect } from 'react-redux';
import {addTodo,subTodo} from "../container/action/Action_Fun";

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
            checked:false
        }

        this.props.actionForSubmit(data);
    }
    
    render() {
        
        const{inputValue,todolist} = this.props;
        console.log(todolist,'hh')
        return (
            <div> 
                <form onSubmit={this.handleSubmit}  >
                    <div className ='input-group'>
                        <input type ='text' className='form-control text-capitalize mt-4 ' value ={inputValue} onChange ={this.handlerChange} placeholder='your todo item' />
                    </div>
                    <button type='submit' className='btn btn-block btn-primary mt-4'>ADD</button>  
                </form>      
                    <br />

                    <div >
                        {todolist.map((item,index)=>{
                            
                            return(
                                item.todo===''?alert('Todo name Can not be blank '):
                                <div className = 'form-control text-capitalize my-2' key ={index}>
                                 <span><input type ="checkbox"  /> </span>
                                 <span className ='mx-2'> {item.todo} </span>
                                </div>
                            );
                        })}      
                   </div>  
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    
    return{
        inputValue: state.reducerAdd.inputValue,
        todolist:state.reducerAdd.todolist
    }
}
const mapDispatchToProps = (dispatch)=> {
    return {
      actionForAddTodo:(todo_title)=>dispatch(addTodo(todo_title)),
      actionForSubmit:(todo_submit)=>dispatch(subTodo(todo_submit))
        }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoInput);

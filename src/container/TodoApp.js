import React, { Component } from 'react';
import TodoInput from './TodoInput';
export default class TodoApp extends Component {
    render() {
        
        return (
            <div className = "container" >
               <div className = "row" >
                   <div className = "col-10 mx-auto mt-4 col-md-8 " >
                      <h3 className = 'text-capitalize text-center' > todo app </h3> 
                      <TodoInput  />
                    </div>
                </div>
            </div>        
        )
    }
}

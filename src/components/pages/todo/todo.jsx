import React, { useEffect, useState } from 'react'
import './todo.css'
export const TodoList = () => {
    const [inputValue,setInput]=useState("")
    const [todos,setTodos]=useState([])
    let usersData=JSON.parse(localStorage.getItem("users"));
    let loggedUserIndex=JSON.parse(localStorage.getItem("loggedin"))
    useEffect(() => {
        if (usersData[loggedUserIndex]?.task) {
        setTodos(usersData[loggedUserIndex].task);
        }
    },[]);
    const addTask=()=>{
        if(inputValue!==""){
            const updatedTodos = [...todos, inputValue];
            setTodos(updatedTodos);   

            usersData[loggedUserIndex].task=updatedTodos
            localStorage.setItem("users",JSON.stringify(usersData));
            setInput("")
        }
        else{
            alert("Please Enter the Task")
        }
        <showTodos/>
    }
    const showTodos=usersData[loggedUserIndex].task.map((element,index) => {
        return(
            <TodoListItem value={element} key={index} itemIndex={index}/>
        )
    });
    
  return (
      <div className='main_todo_div'>
        <input type="text" value={inputValue} className='input' placeholder='Write Todo' onChange = {(e)=>
            setInput(e.target.value)}
            />
        <button onClick={addTask} className='AddBtn'>Add</button>
        <div>
            {showTodos}
        </div>
    </div>
  )
}
function TodoListItem({value,itemIndex}){
    let usersData=JSON.parse(localStorage.getItem("users"));
    let loggedUserIndex=JSON.parse(localStorage.getItem("loggedin"))
    const EditItem = () => {
        const updatedText = prompt("Edit Todo", value);
        if (updatedText !== null && updatedText !== "") {
            usersData[loggedUserIndex].task[itemIndex] = updatedText;
            localStorage.setItem("users", JSON.stringify(usersData));
            window.location.reload(); 
        }
    };

    const DeleteItem = () => {
        usersData[loggedUserIndex].task.splice(itemIndex, 1);
        localStorage.setItem("users", JSON.stringify(usersData));
        window.location.reload(); 
    };
    return(
        <div className='Item_div'>
            <p id={itemIndex} className='Item_text'>{value} 
                <button onClick={EditItem} className='Edit_Btn'>Edit</button> 
                <button onClick={DeleteItem} className='Delete_Btn'>Delete</button>
            </p>
        </div>
    )
}
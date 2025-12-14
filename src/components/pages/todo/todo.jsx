import React, { useEffect, useState } from 'react'

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
    <div>
        <input type="text" value={inputValue} placeholder='Write Todo' onChange = {(e)=>
            setInput(e.target.value)}
        />
        <button onClick={addTask}>Add</button>
        <div>
            {showTodos}
        </div>
    </div>
  )
}
function TodoListItem({value,itemIndex}){
    const DeleteItem=(e)=>{
        const clickBtn=e.target
        let id=clickBtn.parentNode.id
        let text=clickBtn.parentNode.textContent
        alert(text)
    }
    return(
        <div>
            <p id={itemIndex}>{value} <button onClick={DeleteItem}>Edit</button> <button>Delete</button></p>
        </div>
    )
}
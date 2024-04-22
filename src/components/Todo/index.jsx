import React, { useState } from "react";
import "./style.css";

export default function Todo(props) {
  const [isEditing, setIsEditing] = useState(false);
  const [formState, setFormState] = useState({
    task:props.task,
    priority:props.priority
  });

  const changeHandle = e =>{
    const {name,value} = e.target;
    setFormState({
      ...formState,
      [name]:value
    })
  }
const handleSubmit = e=>{
  e.preventDefault();
  const todoObj = {
    task:formState.task,
    priority:formState.priority
  }
  props.edit(props.id,todoObj);
  setIsEditing(false);
}
  return (
    <div
      className={`Todo ${props.priority} ${props.isComplete ? "complete" : ""}`}
    >
      {isEditing ? (
        <form onSubmit={handleSubmit}>
          <input name="task" onChange={changeHandle} value={formState.task} />
          <select
            name="priority"
            onChange={changeHandle}
            value={formState.priority}
          >
            <option value="low">Like It</option>
            <option value="med">Love It</option>
            <option value="high">Gotta Have it</option>
          </select>
          <button>Edit Todo</button>
        </form>
      ) : (
        <>
          <p>{props.task}</p>
          <div>
            <button onClick={() => props.toggleComplete(props.id)}>
              {props.isComplete ? "Uncomplete" : "Complete"}
            </button>
            <button onClick={()=>setIsEditing(true)}>Edit</button>
            <button onClick={() => props.delete(props.id)}>Delete</button>
          </div>
        </>
      )}
    </div>
  );
}

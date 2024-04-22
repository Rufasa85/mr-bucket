import React, {useState} from 'react'
import "./style.css"

export default function TodoForm(props) {
  const [formState, setFormState] = useState({
    task:"",
    priority:"med"
  })

  const changeHandle = e =>{
    const {name,value} = e.target;
    setFormState({
      ...formState,
      [name]:value
    })
  }

  const handleSubmit = e=>{
    e.preventDefault();
    props.addTodo({
      task:formState.task,
      priority:formState.priority
    })
    setFormState({
      task:"",
      priority:"med"
    })
  }

  return (
    <form className="TodoForm" onSubmit={handleSubmit}>
      <input name ="task"  onChange={changeHandle} value={formState.task}/>
      <select name ="priority" onChange={changeHandle} value={formState.priority}>
        <option value="low">Like It</option>
        <option value="med">Love It</option>
        <option value="high">Gotta Have it</option>
      </select>
      <button>Add Todo</button>
    </form>
  )
}

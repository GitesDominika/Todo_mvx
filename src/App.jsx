
import {useState} from "react";
import "./App.scss";

function App() {
const [value, setValue] = useState('')
    const [todos, setTodos] = useState([])

  function handleValue(event){
  setValue(event.target.value);
  }
function handleAddTodo (){
    if (event.key === "Enter") {
setTodos([...value]);
setValue('');
    }
}
function  handleChangeStatus(todo) {

}
    return (
      <div>
      <h1>todos</h1>
                <input type="text" value={value} onChange={handleValue} onKeyUp={handleAddTodo}/>
        <ul className="todo"> {todos.map((todo, id) => (
            <li key={id}>
                <span className="status" onClick={()}> </span><span>{todo}</span></li>))}</ul>
      </div>
  );
}
export default App

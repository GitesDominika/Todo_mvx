import'./App.scss';
import {useState} from "react";

function App() {

    const [todo, setTodo] = useState('');
    const [todos, setTodos] = useState([]);

    const getId = () => todos.length === 0 ? 1 : Math.max(...todos.map ((task) => task.id)) + 1;

    // const handleInput = (event) => {
    //     setTodos(event.target.value)
    //     setTodo('')
    // };
    const handleAppTodo = (event) => {
        if (event.key === "Enter" && todo.trim().length >= 3) {
            setTodos([{
                id: getId(),
                status: 'in progress',
                title: todo
            }, ...todos]);
            setTodo('');

        }

    };
    const handleChangeStatus = (task) => {
        task.status = task.status === 'in progress' ? 'done' : 'in progress';
        setTodos([...todos]);
    };


    return (
        <div className="todoapp"
        ><h1>todos</h1>
        <sectionS className="todos">
            <input type="text" className="todos" value={todo}
                   placeholder="what needs to be done"
            onChange={(event) => setTodo((event.target.value))}
            onKeyUp={handleAppTodo}/>
            <ul className="todos-list">
                {todos.map((task) => (
                    <li className="todos-iten"
                        key={task.id}
                    >
                        <span className={task.status === 'in progress' ? 'status' : 'done'} onClick={ () => handleChangeStatus(task) }></span>
                        <span>{task.title}</span></li>
                ))};
            </ul>
        </sectionS>
        </div>
    );
}

export default App;

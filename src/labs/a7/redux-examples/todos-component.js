import React, {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {addTodo, deleteTodo, todoDoneToggle} from "./reducers/todos-reducer";

const Todos = () => {
    const todos = useSelector((state) => state.todos)
    const [todo, setTodo] = useState({do: ''})
    const dispatch = useDispatch()

    const todoChangeHandler = (e) => {
        const doValue = e.target.value
        const newTodo = {do: doValue}
        setTodo(newTodo)
    }
    const createTodoClickHandler = () => {
        dispatch(addTodo(todo))
    }
    const deleteTodoClickHandler = (index) => {
        dispatch(deleteTodo(index))
    }
    const toggleTodoDone = (index) => {
        dispatch(todoDoneToggle(index))
    }

    return (
        <>
            <h3>Todos</h3>
            <ul className="list-group">
                <li className="list-group-item">
                    <button
                        className="btn btn-primary rounded float-end w-25"
                        onClick={createTodoClickHandler}
                    >
                        Add Todo
                    </button>
                    <input
                        onChange={todoChangeHandler}
                        value={todo.do}
                        className="form-control w-75"
                    />
                </li>

                {
                    todos.map((todo, index) =>
                                  <li className="list-group-item">
                                      <input
                                          type="checkbox"
                                          checked={todo.done}
                                          className="me-2"
                                          onChange={() => toggleTodoDone(index)}
                                      />
                                      {todo.do}
                                      <button
                                          className="btn btn-danger float-end"
                                          onClick={() => deleteTodoClickHandler(index)}
                                      >
                                          Delete
                                      </button>
                                  </li>
                    )
                }
            </ul>
        </>

    )
}

export default Todos
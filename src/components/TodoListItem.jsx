import { useContext } from "react";
import UserContext from "../context/UserContext";

function TodoListItem({ todo, deleteTodo }) {
    const contextObject = useContext(UserContext)
    const user = contextObject.user

    const mine = todo.user === user.id
    return(
        <li className={mine ? "my-todo" : ""}>
            {todo.done ? "✓ " : "○ "}
            {todo.text}
            {mine && 
                <button onClick={() => deleteTodo(todo)}>
                    delete
                </button>
            }
        </li>
    );
}

export default TodoListItem;
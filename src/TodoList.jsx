
const TodoList = ({ todos, toggleComplete, removeTodo }) => {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                    <span onClick={() => toggleComplete(todo.id)}>{todo.text}</span>
                    <button onClick={() => removeTodo(todo.id)}>Remove</button>
                </li>
            ))}
        </ul>
    );
};

export default TodoList;

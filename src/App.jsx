
import { useState } from 'react';
import TodoList from './TodoList';

const App = () => {
    // State for managing the list of todos
    const [todos, setTodos] = useState([]);
    
    // State for managing the current input value
    const [inputValue, setInputValue] = useState('');

    // Function to add a new todo item
    const addTodo = () => {
        if (inputValue) {
            setTodos([...todos, { id: Date.now(), text: inputValue, completed: false }]);
            setInputValue('');  // Clear input after adding the task
        }
    };

    // Function to toggle the completion state of a todo
    const toggleComplete = (id) => {
        setTodos(todos.map(todo => 
            todo.id === id ? { ...todo, completed: !todo.completed } : todo
        ));
    };

    // Function to remove a todo item
    const removeTodo = (id) => {
        setTodos(todos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1>To-Do List</h1>
            <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Add a new task"
            />
            <button onClick={addTodo}>Add</button>
            <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo} />
        </div>
    );
};

export default App;

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const todosFromStorage = JSON.parse(localStorage.getItem('todos')) || [];
    setTodos(todosFromStorage);
  }, []);

  const handleAddTodo = () => {
    navigate('/additems');
  };

  const handleLogout = () => {
    // Perform any logout actions (e.g., clear user session, reset local storage)
    // For example: localStorage.clear();
    navigate('/');
  };

  return (
    <div className="container">
      <header style={{ marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <h1 style={{ margin: '0', fontSize: '24px', color: 'blue' }}>Todo List</h1>
        
      </header>
      <div>
        {todos.length === 0 ? (
          <p style={{ fontStyle: 'italic', color: 'gray' }}>No items yet</p>
        ) : (
          <ul style={{ listStyle: 'none', padding: '0' }}>
            {todos.map((todo, index) => (
              <li key={index} style={{ marginBottom: '10px', padding: '10px', border: '1px solid #ccc', backgroundColor: index % 2 === 0 ? '#f5f5f5' : '#e0e0e0' }}>
                <strong style={{ color: 'green' }}>Title:</strong> {todo.title}, <strong style={{ color: 'blue' }}>Due Date:</strong> {todo.date}
              </li>
            ))}
          </ul>
        )}
        <div>
          <button onClick={handleAddTodo} style={{ marginRight: '30px', padding: '8px 16px', fontSize: '16px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}>Add Todo</button>
          <button onClick={handleLogout} style={{ padding: '8px 16px', fontSize: '16px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px',marginLeft:'90px' }}>Logout</button>
        </div>
      </div>
      <hr style={{ margin: '20px 0', borderColor: 'blue' }} />
    </div>
  );
};

export default Home;

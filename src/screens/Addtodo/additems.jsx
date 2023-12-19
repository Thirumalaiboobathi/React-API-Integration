import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addtodo.css'

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { title, date };
    const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];
    const updatedTodos = [...existingTodos, newTodo];
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    navigate('/home');
  };

  const handleGoBack = () => {
    navigate('/home');
  };

  return (
    <div className="outer-container">
      <div className="container" style={{ border: '2px solid #ccc', padding: '20px', borderRadius: '10px', maxWidth: '400px', margin: '0 auto' }}>
        <h1 style={{ color: 'blue' }}>Add Todo</h1>
        <button onClick={handleGoBack} style={{ backgroundColor: 'red', color: 'white' }}>Go Back</button>
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="date">Due Date:</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>
          <button type="submit" style={{ backgroundColor: 'green', color: 'white' }}>Add Todo</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;

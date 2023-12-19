import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

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
    navigate('/');
  };

  const handleEdit = (index) => {
    const todoToEdit = todos[index];
    navigate('/additems', { state: { editing: true, todoToEdit, index } });
  };
  

  const handleDelete = (index) => {
    const updatedTodos = [...todos.slice(0, index), ...todos.slice(index + 1)];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
  };

  return (
    <div className="container">
      <header>
        <h1>Todo List</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary" className="mb-2" onClick={handleAddTodo}>
            Add Todo
          </Button>
          <Button variant="danger" className="mb-2" onClick={handleLogout}>
            Logout
          </Button>
        </div>
      </header>
      <div className="table-responsive">
        {todos.length === 0 ? (
          <p>No items yet</p>
        ) : (
          <Table bordered>
            <thead>
              <tr>
                <th>Student Name</th>
                <th>Age</th>
                <th>Email</th>
                <th>Qualification</th>
                <th>Phone Number</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {todos.map((todo, index) => (
                <tr key={index}>
                  <td>{todo.studentName}</td>
                  <td>{todo.age}</td>
                  <td>{todo.email}</td>
                  <td>{todo.qualification}</td>
                  <td>{todo.phoneNumber}</td>
                  <td>
                    <Button variant="primary" onClick={() => handleEdit(index)}>
                      Edit
                    </Button>{' '}
                    <Button variant="danger" onClick={() => handleDelete(index)}>
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
      </div>
    </div>
  );
};

export default Home;

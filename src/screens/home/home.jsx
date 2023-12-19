import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const Home = () => {
  const [todos, setTodos] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(null);
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
    setCurrentIndex(index);
    setShowModal(true);
  };

  const confirmDelete = () => {
    const updatedTodos = [...todos.slice(0, currentIndex), ...todos.slice(currentIndex + 1)];
    setTodos(updatedTodos);
    localStorage.setItem('todos', JSON.stringify(updatedTodos));
    setShowModal(false);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container">
      <header>
        <h1>Student Informationt</h1>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary" className="mb-2" onClick={handleAddTodo}>
            Add Student
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
      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm Delete</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this item?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Cancel
          </Button>
          <Button variant="danger" onClick={confirmDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Home;

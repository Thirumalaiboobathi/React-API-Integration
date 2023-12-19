import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addtodo.css';

const AddItems = () => {
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { editing, todoToEdit,index } = location.state || {};

  useEffect(() => {
    if (showAlert) {
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
    }
  }, [showAlert]);

  useEffect(() => {
    if (editing && todoToEdit) {
      setStudentName(todoToEdit.studentName || '');
      setAge(todoToEdit.age || '');
      setEmail(todoToEdit.email || '');
      setQualification(todoToEdit.qualification || '');
      setPhoneNumber(todoToEdit.phoneNumber || '');
    }
  }, [editing, todoToEdit]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = { studentName, age, email, qualification, phoneNumber };
    const existingTodos = JSON.parse(localStorage.getItem('todos')) || [];

    if (editing && todoToEdit && typeof index !== 'undefined') {
      const updatedTodos = [...existingTodos];
      updatedTodos[index] = { ...newTodo };
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setShowAlert(true);

      setTimeout(() => {
        navigate('/home');
      }, 4000);
    } else {
      const updatedTodos = [...existingTodos, newTodo];
      localStorage.setItem('todos', JSON.stringify(updatedTodos));
      setShowAlert(true);

      setTimeout(() => {
        navigate('/home');
      }, 5000);
    }
  };



  const handleGoBack = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="border rounded p-4 mt-4">
        <h1 className="text-center mb-4">Enter Student Details</h1>
        <Button variant="danger" onClick={handleGoBack} className="float-right mb-3">
          Go Back
        </Button>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Student Name:</Form.Label>
            <Form.Control
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </Form.Group>
          
          <Form.Group>
            <Form.Label>Age:</Form.Label>
            <Form.Control
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Qualification:</Form.Label>
            <Form.Control
              as="select"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
            >
              <option value="">Select</option>
              <option value="BE/B Tech">BE/B Tech</option>
              <option value="ME">ME</option>
              <option value="Bsc">Bsc</option>
              <option value="Msc">Msc</option>
              <option value="Diploma">Diploma</option>
            </Form.Control>
          </Form.Group>
          <Form.Group>
            <Form.Label>Phone Number:</Form.Label>
            <Form.Control
              type="tel"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </Form.Group>
          <br></br>
          {/* Other form fields */}
          <Button type="submit" variant="success" className="d-block mx-auto">
            {editing ? 'Update Student' : 'Add Student'}
          </Button>
        </Form>
        {showAlert && (
          <div className="alert animate__animated animate__fadeInOut">
            Student information {editing ? 'updated' : 'added'} successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default AddItems;





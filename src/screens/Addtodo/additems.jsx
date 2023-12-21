import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import './addtodo.css';
import axios from 'axios';
import { config } from '../../config';

const AddItems = () => {
  const [studentName, setStudentName] = useState('');
  const [email, setEmail] = useState('');
  const [qualification, setQualification] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [age, setAge] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const { editing, todoToEdit, index } = location.state || {};

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newTodo = { studentName, age, email, qualification, phoneNumber };

    try {
      if (editing && todoToEdit && typeof index !== 'undefined') {
        await axios.put(`${config.api_endpoint_baseURL}/${todoToEdit.id}`, newTodo);
        setShowAlert(true);

        setTimeout(() => {
          navigate('/home');
        }, 4000);
      } else {
        await axios.post(`${config.api_endpoint_baseURL}`, newTodo);
        setShowAlert(true);

        setTimeout(() => {
          navigate('/home');
        }, 5000);
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGoBack = () => {
    navigate('/home');
  };

  return (
    <div className="container">
      <div className="border rounded p-4 mt-4" style={{ backgroundColor: '#f9f9f9', maxWidth: '500px', margin: '0 auto' }}>
        <h1 className="text-center mb-4" style={{ color: '#333333' }}>
          Enter Student Details
        </h1>
        <Button variant="danger" onClick={handleGoBack} className="float-right mb-3">
          Go Back
        </Button>
        <Form onSubmit={handleSubmit}>

          {/* Student Name */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#333333' }}>Student Name:</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter student name"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              style={{ borderRadius: '8px' }}
            />
          </Form.Group>

          {/* Age */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#333333' }}>Age:</Form.Label>
            <Form.Control
              type="number"
              placeholder="Enter age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              style={{ borderRadius: '8px' }}
            />
          </Form.Group>

          {/* Email */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#333333' }}>Email:</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ borderRadius: '8px' }}
            />
          </Form.Group>

          {/* Qualification */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#333333' }}>Qualification:</Form.Label>
            <Form.Control
              as="select"
              value={qualification}
              onChange={(e) => setQualification(e.target.value)}
              style={{ borderRadius: '8px' }}
            >
              <option value="">Select</option>
              <option value="BE/B Tech">BE/B Tech</option>
              <option value="ME">ME</option>
              <option value="ME">Diplomo</option>
              <option value="ME">Bsc/Msc</option>
              <option value="ME">BCA/MCA</option>
            </Form.Control>
          </Form.Group>

          {/* Phone Number */}
          <Form.Group className="mb-3">
            <Form.Label style={{ color: '#333333' }}>Phone Number:</Form.Label>
            <Form.Control
              type="tel"
              placeholder="Enter phone number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              style={{ borderRadius: '8px' }}
            />
          </Form.Group>

          {/* Submit Button */}
          <Button type="submit" variant="success" className="d-block mx-auto mb-3" style={{ width: '100%', borderRadius: '8px' }}>
            {editing ? 'Update Student' : 'Add Student'}
          </Button>
        </Form>
        {/* Success Alert */}
        {showAlert && (
          <div className="alert animate__animated animate__fadeInOut" style={{ backgroundColor: '#5cb85c', color: '#ffffff', borderRadius: '8px' }}>
            Student information {editing ? 'updated' : 'added'} successfully!
          </div>
        )}
      </div>
    </div>
  );
};

export default AddItems;

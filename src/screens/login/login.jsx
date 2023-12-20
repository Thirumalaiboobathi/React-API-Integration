import React, { useState } from 'react';
import { MDBBtn, MDBContainer, MDBRow, MDBCol, MDBCard, MDBCardBody, MDBInput, MDBIcon, MDBCheckbox } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

const login = () => {
  localStorage.setItem('auth_token', 'my_auth_token_here');
};

function LoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageColor, setMessageColor] = useState('');

  const handleLogin = () => {
    if (username === 'root' && password === '12345678') {
      setMessage('Logged In Successfully');
      setMessageColor('green');
      login();
      navigate('/home');
    } else {
      setMessage('Invalid Username and Password');
      setMessageColor('red');
    }
  };

  const goToRegister = () => {
    navigate('/register'); // Change '/register' to your actual registration page route
  };

  return (
    <div style={{ backgroundColor: '#508bfc', minHeight: '100vh' }}>
      <MDBContainer fluid>
        <MDBRow className='d-flex justify-content-center align-items-center h-100'>
          <MDBCol col='12'>
            <MDBCard className='bg-white my-5 mx-auto' style={{ borderRadius: '1rem', maxWidth: '500px' }}>
              <MDBCardBody className='p-5 w-100 d-flex flex-column'>
                <h2 className="fw-bold mb-2 text-center">Sign in</h2>
                <p className="text-white-50 mb-3">Please enter your login and password!</p>
                <MDBInput
                  wrapperClass='mb-4 w-100'
                  label='Username'
                  id='username'
                  type='text'
                  size="lg"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
                <MDBInput
                  wrapperClass='mb-4 w-100'
                  label='Password'
                  id='password'
                  type='password'
                  size="lg"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <MDBCheckbox name='flexCheck' id='flexCheckDefault' className='mb-4' label='Remember password' />
                <MDBBtn size='lg' onClick={handleLogin}>
                  Login
                </MDBBtn>
                <MDBBtn size='lg' onClick={goToRegister} className='mt-3'>
                  Register
                </MDBBtn>
                <hr className="my-4" />
                <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                <MDBIcon fab icon="google" className="mx-2" />
                Sign in with Google
              </MDBBtn>
              <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                <MDBIcon fab icon="facebook-f" className="mx-2" />
                Sign in with Facebook
              </MDBBtn>
                <p style={{ color: messageColor }}>{message}</p>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default LoginPage;

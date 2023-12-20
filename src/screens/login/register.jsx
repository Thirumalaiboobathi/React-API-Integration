import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon,
  MDBRow,
  MDBCol,
  MDBCheckbox
} from 'mdb-react-ui-kit';
import './register.css';
import stu from "./studentlife.webp"

function Register() {
  return (
    <MDBContainer fluid className='my-5'>

      <MDBRow className='g-0 align-items-center'>
        <MDBCol lg='6'>

          <MDBCard className='my-5 cascading-right' style={{ background: 'hsla(0, 0%, 100%, 0.55)', backdropFilter: 'blur(30px)' }}>
            <MDBCardBody className='p-5 shadow-5 text-center'>

              <h2 className="fw-bold mb-5">Sign up now</h2>

              <MDBRow>
                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text' style={{ borderWidth: '2px', borderColor: 'black' }} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form2' type='text' style={{ borderWidth: '2px', borderColor: 'black' }} />
                </MDBCol>
              </MDBRow>

              <MDBInput wrapperClass='mb-4' label='Email' id='form3' type='email' style={{ borderWidth: '2px', borderColor: 'black' }} />
              <MDBInput wrapperClass='mb-4' label='Password' id='form4' type='password' style={{ borderWidth: '2px', borderColor: 'black' }} />

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Accept the Terms and Condition' style={{ borderWidth: '2px', borderColor: 'black' }} />
              </div>

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">

                <p>or sign up with:</p>

                <hr className="my-4" />
                <MDBBtn className="mb-2 w-100" size="lg" style={{ backgroundColor: '#dd4b39' }}>
                  <MDBIcon fab icon="google" className="mx-2" />
                  Sign in with Google
                </MDBBtn>
                <MDBBtn className="mb-4 w-100" size="lg" style={{ backgroundColor: '#3b5998' }}>
                  <MDBIcon fab icon="facebook-f" className="mx-2" />
                  Sign in with Facebook
                </MDBBtn>

              </div>

            </MDBCardBody>
          </MDBCard>
        </MDBCol>

        <MDBCol lg='6' className='d-flex align-items-center justify-content-center'>
          <img src={stu} className="w-100 rounded-4 shadow-4" alt="Student Life" />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  );
}

export default Register;

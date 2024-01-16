import { useEffect, useContext } from 'react';
import { CurrentPageContext } from '../App';
// import React, { useState } from 'react';
// import LoginForm from '../components/signInPage/login';
import RegistrationForm from '../components/register';

function Register() {
    const { setCurrentPage } = useContext(CurrentPageContext);
  
    useEffect(() => document.title = 'Traveler | Register Now', []);

    useEffect(() => {
        setCurrentPage({ 'home': false, 'all-tours': false})
      }, [setCurrentPage])
  
  
    return (
      <>
        {/* <LoginForm /> */}
        <RegistrationForm />
      </>
    )
  }
  
  export default Register;
import { useEffect, useContext } from 'react';
import { CurrentPageContext } from '../App';
// import React, { useState } from 'react';
import LoginForm from '../components/login';
// import RegistrationForm from '../components/signInPage/registration';

function LogIn() {
    const { setCurrentPage } = useContext(CurrentPageContext);
  
    useEffect(() => document.title = 'Traveler | Log In', []);

    useEffect(() => {
        setCurrentPage({ 'home': false, 'all-tours': false})
      }, [setCurrentPage])
  
  
    return (
      <>
        <LoginForm />
        {/* <RegistrationForm /> */}
      </>
    )
  }
  
  export default LogIn;
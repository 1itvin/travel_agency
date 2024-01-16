// import { useEffect, useContext } from 'react';
// import { CurrentPageContext } from '../App';
// // import React, { useState } from 'react';
// import LoginForm from '../components/signInPage/login';
// import RegistrationForm from '../components/signInPage/registration';

// function SignIn() {
//     const { setCurrentPage } = useContext(CurrentPageContext);
  
//     useEffect(() => document.title = 'Traveler | Sign In', []);

//     useEffect(() => {
//         setCurrentPage({ 'home': false, 'all-tours': false})
//       }, [setCurrentPage])
  
  
//     return (
//       <>
//         <LoginForm />
//         <RegistrationForm />
//       </>
//     )
//   }
  
//   export default SignIn;
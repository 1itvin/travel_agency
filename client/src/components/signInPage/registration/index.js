import React, { useState } from 'react';

function RegistrationForm() {
    const [state, setState] = useState({
        username: "",
        password: ""
    });

    const handleChange = (e) => {
        const { id, value } = e.target;
        setState(prevState => ({
            ...prevState,
            [id]: value
        }));
    }

    const handleSubmitClick = (e) => {
        e.preventDefault();
        if(state.username && state.password) {
            console.log("Успешная регистрация");
        } else {
            console.log("Пожалуйста, заполните все поля");
        }
    }

    return(
        <div className="container">
            <form>
                <div className="form-group">
                    <label htmlFor="username">Login</label>
                    <input type="text" 
                           className="form-control" 
                           id="username" 
                           value={state.username}
                           onChange={handleChange}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" 
                           className="form-control" 
                           id="password" 
                           value={state.password}
                           onChange={handleChange} 
                    />
                </div>
                <button 
                    type="submit" 
                    className="btn btn-primary" 
                    onClick={handleSubmitClick}
                >
                    Register
                </button>
            </form>
        </div>
    );
}

export default RegistrationForm;

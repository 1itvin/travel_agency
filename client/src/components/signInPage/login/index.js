import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CountryContext } from '../../../App';
import useFetch from '../../../hooks/useFetch';

function LoginForm() {
    const history = useHistory();
    const { data } = useFetch('http://localhost:8080/api/v1/locations');
    const { data: response, isFetching, isError } = data;
    const [selected, setSelected] = useState('');
    const { setSelectedCountry } = useContext(CountryContext);


    useEffect(() => {
        if (response.length !== 0) setSelected(response[0].title);
      }, [data, response])
    
      useEffect(() => {
        setSelectedCountry(null);
      }, [setSelectedCountry])
    
      const optionChangeHandler = (e) => {
        setSelected(e.currentTarget.value);
      }
    
      const btnClickHandler = () => {
        setSelectedCountry(selected.replaceAll(' ', '+'));
        history.push('/all-tours')
      }

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

    // const handleSubmitClick = (e) => {
    //     e.preventDefault();
    //     if(state.username && state.password) {
    //         console.log("Успешная аутентификация");
    //     } else {
    //         console.log("Пожалуйста, заполните все поля");
    //     }
    // }

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
                {/* <button 
                    type="submit" 
                    className="btn btn-primary" 
                    onClick={handleSubmitClick}
                >
                    Войти
                </button> */}

                <button type="button" onClick={btnClickHandler}>Log in</button>
            </form>
        </div>
    );
}

export default LoginForm;

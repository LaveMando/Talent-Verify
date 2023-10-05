// Import React and necessary hooks for creating a React component
import React, { useState } from 'react';

// Import the CSS file for styling this component
import './style.css';
import './index.css';

// Import Axios for making HTTP requests
import axios from 'axios';

// Import the useNavigate function from React Router for page navigation
import { useNavigate } from 'react-router-dom';


function Login() {

    // State to store email and password input values
    const [values, setValues] = useState({
        email: '',
        password: ''
    })

    // React Router's navigate function for page navigation
    const navigate = useNavigate()

    // Configure Axios to send credentials with requests
    axios.defaults.withCredentials = true;

    // State to store and display error messages
    const [error, setError] = useState('')

    // Function to handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent default form submission behavior

        // Send a POST request to the login endpoint with input values
        axios.post('http://localhost:8081/login', values)
        .then(res => {
            if(res.data.Status === 'Success') {
                // If login is successful, navigate to the home page
                navigate('/');
            } else {
                // If login fails, set the error message
                setError(res.data.Error);
            }
        })
        .catch(err => console.log(err)); // Log any errors that occur
    }

    return (
        <div className='d-flex justify-content-center align-items-center vh-100 loginPage'>
            <div className='p-3 rounded w-25 border loginForm'>
                <div className='text-danger'>
                    {error && error} {/* Display error message if it exists */}
                </div>
                <h2>Login</h2>
                <form onSubmit={handleSubmit}> {/* Handle form submission */}
                <div className = "input-container">
                    <label>Company Name</label>
                    <input type ="text" required/> {/* Input for company name */}
                </div>
                <div className = "input-container">
                    <label>Password</label>
                    <input type ="password" required/> {/* Input for password */}
                </div>

                <a href="#">Forgot Password?</a>
                <a href="#">Create New Account</a>
                
                <button className= "loginBut"></button> {/* Login button */}
                <button className= "signtoG">
                    <img
                    src= 'https://www.freepnglogos.com/images/google-logo-9808.html'
                    alt= "Trees"
                    height ="30"
                    />
                    <p>Sign in with Google</p>
                </button>
                </form>
            </div>
        </div>
    )
}

export default Login

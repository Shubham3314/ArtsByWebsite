import React, { useState } from "react";
import "../Styles/LogIn.css"
import { auth } from "../firebase";
import Register from "./Register";
import { signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate,Routes, Route } from "react-router-dom";
import Main from "./Main";
import Home from "../routes/Home"


export default function Login (props)  {
    let navigate = useNavigate(); 
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        signInWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                navigate('/home');
                console.log("User Logged In")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
            });
    }


    function regi(){
        console.log("Register")
        navigate('/register')
    }
    return (
        
        
    
        <div className="login">
        {/* {currentForm === "login" ? <Login onFormSwitch={toggleForm} /> : <Register onFormSwitch={toggleForm} />} */}
        <div className="auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <button className="link-btn" onClick={regi}>Don't have an account? Register here.</button>
        </div>
        <Routes>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/home' element={<Home/>}></Route>
        </Routes>
        
    </div>

        
    )
}



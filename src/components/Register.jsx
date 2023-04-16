import React, { useState } from "react";
import "../Styles/Register.css"
import { db,auth } from "../firebase";
import { set,ref } from "firebase/database";
import { createUserWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import Login from "./LogIn";
import { Navigate, Routes, Route } from "react-router-dom";

export const Register = (props) => {


    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        console.log(name);
        console.log(pass);

        createUserWithEmailAndPassword(auth, email, pass)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                set(ref(db, 'users/'+ user.uid), {
                    username: name,
                    email: email,
                  });
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
            });
    }

    function log(){
        console.log("login")
        Navigate('/login')
    }

    return (
        <div className="register">
        
            <div className="auth-form-container">
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={log}>Already have an account? Login here.</button>
            </div>
            <Routes>
                <Route path='/login' element={<Login/>}></Route>
            </Routes>
        </div>
       
    )
}

export default Register
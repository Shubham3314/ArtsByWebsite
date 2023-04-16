import "../Styles/Navbar.css";
import {Link,Routes, Route,useNavigate} from "react-router-dom"
import { MenuItems } from "./MenuItems";
import  Login  from "./LogIn";
import Register from './Register';
import { useState } from "react";


const Navbar = () =>{
  const state = {clicked: false};
  const handelClick = () =>{
    this.setState({clicked: !state.clicked})
   
  }
  
  

  let navigate = useNavigate(); 
  const print = (index) =>{
    console.log(index)
    if(index.index === 6)
    {
      console.log("Login")
      navigate('/LogIn');
    }
    
  }

    return(
      <nav className="NavbarItems">
        <h1 className="navbar-logo">ArtsBy</h1>
        <div className="menu-icons" onClick={handelClick}>
          <i className={state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
        </div>
        <ul  className={state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((items, index) =>{
            return(
              <li key={index} onClick={() => print({index})}> 
                <Link className={items.cName} to={items.url}>
                <i className={items.icon}/>
                {items.title}
                </Link>
              </li>
            )
          })}
          {/* <button className="signupbtn">Sign Up</button> */}
        </ul>
        
        <Routes>
        <Route path='/LogIn' element={<Login/>}></Route>
        {/* <Route path='/Login' element={<Register/>}> </Route> */}
      </Routes>
      </nav>

      
    
    )}


export default Navbar;